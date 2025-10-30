import fs from "node:fs";
import path from "node:path";
import https from "node:https";
import { spawn } from "node:child_process";

const root = process.cwd();
const manifestPath = path.join(root, "assets.manifest.json");

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function downloadWithHttps(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, res => {
        if (res.statusCode !== 200) {
          return reject(new Error(`GET ${url} -> ${res.statusCode}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      })
      .on("error", err => {
        fs.unlink(dest, () => reject(err));
      });
  });
}

function downloadWithCurl(url, dest) {
  return new Promise((resolve, reject) => {
    const curl = spawn("curl", ["-fL", url, "-o", dest], {
      stdio: ["ignore", "ignore", "inherit"],
    });
    curl.on("error", reject);
    curl.on("exit", code => {
      if (code === 0) {
        resolve();
      } else {
        fs.unlink(dest, () => reject(new Error(`curl exited with code ${code} for ${url}`)));
      }
    });
  });
}

async function download(url, dest) {
  try {
    await downloadWithCurl(url, dest);
  } catch (curlErr) {
    try {
      await downloadWithHttps(url, dest);
    } catch (httpsErr) {
      const error = new Error(`Failed to download ${url}`);
      error.cause = [curlErr, httpsErr];
      throw error;
    }
  }
}

async function run() {
  if (!fs.existsSync(manifestPath)) {
    console.warn("[assets] manifest not found. skip.");
    return;
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  for (const entry of manifest.assets) {
    const out = path.join(root, entry.out);
    ensureDir(path.dirname(out));

    if (entry.b64) {
      const buf = Buffer.from(entry.b64, "base64");
      fs.writeFileSync(out, buf);
      console.log(`[assets] wrote ${entry.out} (${buf.length} bytes from b64)`);
      continue;
    }
    if (entry.url) {
      await download(entry.url, out);
      console.log(`[assets] downloaded ${entry.url} -> ${entry.out}`);
      continue;
    }
    console.warn(`[assets] skipped ${entry.out} (no b64 or url)`);
  }
}

run().catch(err => {
  console.error("[assets] error:", err);
  process.exit(1);
});
