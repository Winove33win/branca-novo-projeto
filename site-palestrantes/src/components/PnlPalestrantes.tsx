import React from 'react';
import '../styles/PnlPalestrantes.css';

const paymentLink =
  'https://payfast.greenn.com.br/141239/offer/G3OHRW?ch_id=133421&fbclid=PAZXh0bgNhZW0CMTEAAacZCWh0VH-I6OJ8X5IZv8rCXC66oMSBFzA5pswffoJbSsGKi7lUEfO6J7mVpQ_aem_irDZLlm5BLTev9uZm71HsA&brid=G9AdFtAx0iCk9G5uIqKDHw';
const whatsappLink =
  'https://wa.me/5531999999999?text=Quero%20informações%20sobre%20o%20curso%20PNL%20para%20Palestrantes';

const audienceHighlights = [
  {
    title: 'Palestrantes que já entregam',
    description: 'Mas querem mais conexão e reação da plateia.',
    image: '/img/para-quem-speaker.jpg',
    imageAlt: 'Mulher palestrando com microfone em um palco iluminado',
  },
  {
    title: 'Trainers, facilitadores e instrutores',
    description: 'Que falam em grupo e precisam manter energia.',
    image: '/img/para-quem-training.jpg',
    imageAlt: 'Facilitadora guiando um time em treinamento corporativo',
  },
  {
    title: 'Quem vende no palco',
    description: 'E quer conduzir ao próximo passo sem parecer vendedor.',
    image: '/img/para-quem-vendas.jpg',
    imageAlt: 'Profissional apresentando slides de vendas para a audiência',
  },
];

const audienceStripImages = [
  '/img/para-quem-strip-01.jpg',
  '/img/para-quem-strip-02.jpg',
  '/img/para-quem-strip-03.jpg',
];

const learningPoints = [
  {
    icon: '🧠',
    title: 'Estrutura mental da audiência',
    text: 'Decodifique como o público pensa para planejar argumentos certeiros desde os primeiros minutos.',
    backgroundImage: '/img/learning-highlight.jpg',
  },
  {
    icon: '💬',
    title: 'Linguagem de impacto',
    text: 'Ajuste palavras, ritmo e tonalidade para gerar adesão imediata e memorável.',
  },
  {
    icon: '📖',
    title: 'Storytelling com PNL',
    text: 'Transforme histórias em gatilhos emocionais que levam a plateia a agir.',
  },
  {
    icon: '🤝',
    title: 'Rapport com plateias grandes',
    text: 'Crie conexão mesmo com centenas de pessoas e mantenha atenção até o final.',
  },
  {
    icon: '🎯',
    title: 'Chamada para ação',
    text: 'Construa ofertas irresistíveis sem soar apelativo, guiando o sim natural.',
  },
  {
    icon: '⚡',
    title: 'Gestão de estado do palestrante',
    text: 'Administre energia, presença e confiança para dominar qualquer palco.',
  },
];

const infoBlocks = [
  {
    heading: 'Datas',
    text: '20, 21 e 22 de novembro de 2025',
    image: '/img/info-dates.jpg',
    imageAlt: 'Calendário de mesa com marcações em destaque',
  },
  {
    heading: 'Formato',
    text: 'Online ao vivo, com exemplos e espaço para perguntas',
    image: '/img/info-live.jpg',
    imageAlt: 'Notebook exibindo uma videochamada com palestrante ao vivo',
  },
  {
    heading: 'Materiais',
    text: 'Slides e referências para aplicar nas próximas palestras',
    image: '/img/info-materials.jpg',
    imageAlt: 'Mão escrevendo anotações sobre material impresso do curso',
  },
];

const resultsGallery = [
  {
    title: 'Antes do palco',
    description: 'Você chega preparado com roteiro claro e energia ancorada.',
    image: '/img/results-before.jpg',
    imageAlt: 'Palestrante revisando anotações antes de subir ao palco',
  },
  {
    title: 'No palco',
    description: 'Conexão real com o público, com plateia engajada e participativa.',
    image: '/img/results-onstage.jpg',
    imageAlt: 'Plateia sorrindo e interagindo durante apresentação',
  },
  {
    title: 'Pós evento',
    description: 'Feedbacks quentes e convites para novas apresentações e vendas.',
    image: '/img/results-after.jpg',
    imageAlt: 'Participantes compartilhando impressões após palestra',
  },
];

const faqItems = [
  {
    question: 'As aulas ficam gravadas?',
    answer:
      'Sim. Você terá acesso às gravações por 12 meses para revisar e aplicar as técnicas com calma.',
  },
  {
    question: 'Posso pagar no cartão?',
    answer:
      'Claro! Você pode parcelar em até 12x no cartão de crédito diretamente pela plataforma da Greenn.',
  },
  {
    question: 'Vou poder tirar dúvidas?',
    answer:
      'Sim. Os encontros ao vivo têm momentos dedicados para perguntas, além de suporte via WhatsApp.',
  },
  {
    question: 'Tem certificado?',
    answer:
      'Sim. Ao concluir os três encontros você recebe um certificado digital de participação.',
  },
];

const faqSupport = {
  image: '/img/faq-branca.jpg',
  imageAlt: 'Branca Barão sorrindo com microfone de mão',
  headline: 'Tem outra dúvida?',
  message: 'Chama a equipe da Branca no WhatsApp e a gente responde rapidinho.',
  ctaLabel: 'Falar com a equipe',
  link: whatsappLink,
};

const PnlPalestrantes: React.FC = () => {
  const publicUrl = process.env.PUBLIC_URL || '';
  const asset = (p: string) => `${publicUrl}${p.startsWith('/') ? p : `/${p}`}`;

  const heroBackgroundStyle = {
    '--hero-pattern': `url(${asset('/img/spotlight-pattern.svg')})`,
  } as React.CSSProperties;

  const heroMedia = {
    photo: asset('/img/hero-branca-stage.jpg'),
    liveThumb: asset('/img/hero-live-thumb.jpg'),
    avatars: [
      { src: asset('/img/hero-avatar-01.jpg'), alt: 'Mulher aplaudindo uma palestra ao vivo' },
      { src: asset('/img/hero-avatar-02.jpg'), alt: 'Homem sorrindo enquanto assiste a uma apresentação' },
    ],
  };

  const resultsBackgroundStyle = {
    '--results-photo': `url(${asset('/img/results-backdrop.jpg')})`,
  } as React.CSSProperties;

  const footerBackgroundStyle = {
    '--footer-pattern': `url(${asset('/img/spotlight-pattern.svg')})`,
    '--footer-photo': `url(${asset('/img/footer-event.jpg')})`,
  } as React.CSSProperties;

  return (
    <div className="pnl-page">
      <main className="layout-container">
        {/* HERO */}
        <section className="hero" style={heroBackgroundStyle}>
          <div className="hero-main">
            <div className="hero-content">
              <div className="hero-meta">
                <div className="hero-live">
                  <img src={heroMedia.liveThumb} alt="Thumb do curso ao vivo" loading="lazy" />
                  <span>Curso ao vivo</span>
                </div>
                <span className="hero-tag">20, 21 e 22/11/2025</span>
              </div>
              <h1 className="hero-title">PNL para Palestrantes</h1>
              <p className="hero-subtitle">
                Use Programação Neurolinguística para construir palestras que conectam, emocionam e conduzem a plateia
                ao próximo passo — mesmo quando o público chega frio.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href={paymentLink} target="_blank" rel="noopener noreferrer">
                  Quero garantir minha vaga
                </a>
                <a className="btn btn-outline" href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <figure className="hero-stage">
              <img src={heroMedia.photo} alt="Branca Barão falando no palco para um auditório cheio" loading="lazy" />
              <div className="hero-avatars" aria-hidden="true">
                {heroMedia.avatars.map((avatar, index) => (
                  <img
                    key={avatar.src}
                    src={avatar.src}
                    alt={avatar.alt}
                    className={`hero-avatar hero-avatar-${index === 0 ? 'top' : 'bottom'}`}
                    loading="lazy"
                  />
                ))}
              </div>
            </figure>
          </div>

          <aside className="enrollment-card" aria-label="Informações de inscrição">
            <div>
              <h2 className="card-title">PNL para Palestrantes</h2>
              <p className="card-subtitle">com Branca Barão — 3 encontros ao vivo</p>
            </div>
            <div className="card-price">
              <strong>12x de R$ 205,32</strong>
              <span>ou R$ 1.997,00 à vista</span>
            </div>
            <a className="btn btn-primary" href={paymentLink} target="_blank" rel="noopener noreferrer">
              Fazer minha inscrição
            </a>
            <a className="btn btn-ghost" href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Tirar dúvida no WhatsApp
            </a>
            <p className="card-secure">Compra 100% segura pela Greenn</p>
            <p className="card-note">Acesso imediato aos materiais de aquecimento após a confirmação.</p>
          </aside>
        </section>

        {/* PARA QUEM É */}
        <section className="section" aria-labelledby="para-quem">
          <h2 id="para-quem" className="section-title">
            Para quem é este curso
          </h2>
          <div className="audience-strip" aria-hidden="true">
            {audienceStripImages.map(image => (
              <img key={image} src={asset(image)} alt="" loading="lazy" />
            ))}
          </div>
          <div className="cards-grid cols-3 audience-grid">
            {audienceHighlights.map(item => (
              <div key={item.title} className="card audience-card">
                <img src={asset(item.image)} alt={item.imageAlt} className="card-thumb" loading="lazy" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* O QUE VAI APRENDER */}
        <section className="section" aria-labelledby="conteudo">
          <h2 id="conteudo" className="section-title">
            O que você vai aprender
          </h2>
          <div className="learning-grid">
            {learningPoints.map(item => (
              <div
                key={item.title}
                className={`learning-card${item.backgroundImage ? ' learning-card--highlight' : ''}`}
                style={
                  item.backgroundImage
                    ? ({ '--learning-card-image': `url(${asset(item.backgroundImage)})` } as React.CSSProperties)
                    : undefined
                }
              >
                <div className="learning-card-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <h3 className="learning-card-title">{item.title}</h3>
                  <p className="learning-card-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORMATO */}
        <section className="section" aria-labelledby="formato">
          <h2 id="formato" className="section-title">
            Formato, datas e acesso
          </h2>
          <div className="info-grid">
            {infoBlocks.map(block => (
              <div key={block.heading} className="info-card">
                <img src={asset(block.image)} alt={block.imageAlt} loading="lazy" />
                <div className="info-card-content">
                  <h3>{block.heading}</h3>
                  <p>{block.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="section results-section" aria-labelledby="resultados" style={resultsBackgroundStyle}>
          <h2 id="resultados" className="section-title">
            Depois do curso, suas palestras ficam assim
          </h2>
          <p className="results-lead">
            É sobre dominar o palco inteiro: presença, narrativa, entrega e chamada para ação com confiança.
          </p>
          <ul>
            <li>Mais atenção e menos gente no celular</li>
            <li>Histórias que realmente geram emoção</li>
            <li>Público dizendo “isso foi pra mim”</li>
            <li>Transição suave para vender seu produto/mentoria</li>
            <li>Mais segurança ao começar e ao fechar</li>
          </ul>
          <div className="results-gallery">
            {resultsGallery.map(item => (
              <div key={item.title} className="results-gallery-item">
                <img src={asset(item.image)} alt={item.imageAlt} loading="lazy" />
                <div className="results-gallery-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a className="btn btn-outline" href={paymentLink} target="_blank" rel="noopener noreferrer">
            Quero esse resultado
          </a>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq">
          <h2 id="faq" className="section-title">
            Dúvidas frequentes
          </h2>
          <div className="faq-list">
            {faqItems.map(item => (
              <div key={item.question} className="faq-item">
                <details>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
          <div className="faq-support">
            <img src={asset(faqSupport.image)} alt={faqSupport.imageAlt} loading="lazy" />
            <div className="faq-support-content">
              <strong>{faqSupport.headline}</strong>
              <p>{faqSupport.message}</p>
              <div className="faq-support-actions">
                <a
                  className="btn btn-outline btn-small"
                  href={faqSupport.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {faqSupport.ctaLabel}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="footer-cta" aria-labelledby="ultima-chamada" style={footerBackgroundStyle}>
          <h2 id="ultima-chamada" className="hero-title" style={{ fontSize: '2.2rem' }}>
            As vagas são limitadas para manter a interação no ao vivo. Se essa turma fizer sentido pra você, entre agora.
          </h2>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <a className="btn btn-accent" href={paymentLink} target="_blank" rel="noopener noreferrer">
              Garantir minha vaga agora
            </a>
          </div>
          <div className="footer-links">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Tirar dúvidas no WhatsApp
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PnlPalestrantes;
