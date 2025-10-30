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
  },
  {
    title: 'Trainers, facilitadores e instrutores',
    description: 'Que falam em grupo e precisam manter energia.',
  },
  {
    title: 'Quem vende no palco',
    description: 'E quer conduzir ao próximo passo sem parecer vendedor.',
  },
];

const learningPoints = [
  {
    icon: '🧠',
    title: 'Estrutura mental da audiência',
    text: 'Decodifique como o público pensa para planejar argumentos certeiros desde os primeiros minutos.',
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
  },
  {
    heading: 'Formato',
    text: 'Online ao vivo, com exemplos e espaço para perguntas',
  },
  {
    heading: 'Materiais',
    text: 'Slides e referências para aplicar nas próximas palestras',
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

const PnlPalestrantes: React.FC = () => {
  return (
    <div className="pnl-page">
      <main className="layout-container">
        <section className="hero">
          <div className="hero-content">
            <span className="hero-tag">Curso ao vivo • 20, 21 e 22/11/2025</span>
            <h1 className="hero-title">PNL para Palestrantes</h1>
            <p className="hero-subtitle">
              Use Programação Neurolinguística para criar palestras persuasivas, envolventes e que levam o público à ação —
              mesmo com plateia fria.
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
          </aside>
        </section>

        <section className="section" aria-labelledby="para-quem">
          <h2 id="para-quem" className="section-title">
            Para quem é este curso
          </h2>
          <div className="cards-grid cols-3">
            {audienceHighlights.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="conteudo">
          <h2 id="conteudo" className="section-title">
            O que você vai aprender
          </h2>
          <div className="learning-grid">
            {learningPoints.map((item) => (
              <div key={item.title} className="learning-card">
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

        <section className="section" aria-labelledby="formato">
          <h2 id="formato" className="section-title">
            Formato, datas e acesso
          </h2>
          <div className="info-grid">
            {infoBlocks.map((block) => (
              <div key={block.heading} className="info-card">
                <h3>{block.heading}</h3>
                <p>{block.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section results-section" aria-labelledby="resultados">
          <h2 id="resultados" className="section-title">
            Depois do curso, suas palestras ficam assim
          </h2>
          <ul>
            <li>Mais atenção e menos gente no celular</li>
            <li>Histórias que realmente geram emoção</li>
            <li>Público dizendo “isso foi pra mim”</li>
            <li>Transição suave para vender seu produto/mentoria</li>
            <li>Mais segurança ao começar e ao fechar</li>
          </ul>
          <a className="btn btn-outline" href={paymentLink} target="_blank" rel="noopener noreferrer">
            Quero esse resultado
          </a>
        </section>

        <section className="section" aria-labelledby="faq">
          <h2 id="faq" className="section-title">
            Dúvidas frequentes
          </h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <div key={item.question} className="faq-item">
                <details>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              </div>
            ))}
          </div>
        </section>

        <section className="footer-cta" aria-labelledby="ultima-chamada">
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
