import React from 'react';

const PnlPalestrantes: React.FC = () => {
    const paymentLink = "https://link-para-pagamento.com";
    const whatsappLink = "https://wa.me/5511999999999";

    return (
        <div className="pnl-palestrantes">
            <header>
                <h1>Curso de PNL para Palestrantes</h1>
                <p>Aprenda a se comunicar de forma eficaz e impactar seu público!</p>
            </header>
            <section>
                <h2>Público-Alvo</h2>
                <p>Este curso é destinado a palestrantes, coaches e profissionais que desejam aprimorar suas habilidades de comunicação.</p>
            </section>
            <section>
                <h2>O que você vai aprender</h2>
                <ul>
                    <li>Técnicas de PNL para melhorar a comunicação</li>
                    <li>Estratégias para engajar o público</li>
                    <li>Como lidar com perguntas e objeções</li>
                </ul>
            </section>
            <section>
                <h2>Formato do Curso</h2>
                <p>O curso será realizado online, com aulas ao vivo e materiais de apoio.</p>
            </section>
            <section>
                <h2>Perguntas Frequentes</h2>
                <p>Confira as perguntas mais comuns sobre o curso.</p>
            </section>
            <footer>
                <a href={paymentLink}>Inscreva-se agora!</a>
                <p>Para mais informações, entre em contato pelo <a href={whatsappLink}>WhatsApp</a>.</p>
            </footer>
        </div>
    );
};

export default PnlPalestrantes;