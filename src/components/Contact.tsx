import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div>
        <h2 className="contact-title">Vamos trabalhar juntos! 👋</h2>  {/* Adicionando o emoji de mãos apertando */}
        <a href="https://wa.me/5542999856451" target="_blank" rel="noopener noreferrer">
          <button>Fale comigo no WhatsApp 🤝</button>  {/* Emoji nas palavras do botão */}
        </a>
      </div>
    </section>
  );
};

export default Contact;
