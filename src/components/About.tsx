import React from 'react';
import minhaFoto from '../assets/imagens/Minha_foto.jpeg';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Sobre Mim</h2>
          <p>
            Eu sou Luiz e atualmente moro em Nova Laranjeiras. Estou na reta final do meu curso de Engenharia de Software e direcionando minha carreira para área de desenvolvimento frontend.
            Com 3 anos tendo experiências em diversas tecnologias frontend, incluindo React, HTML, CSS, JavaScript e NodeJS, e sempre busco qualidade em
            tudo o que faço. Você pode me encontrar no GitHub, onde gosto de desenvolver
            projetos pessoais com React, ou no Linkedin. Atualmente estou expandindo minhas habilidades
            estudando React Native e TypeScript.
          </p>
        </div>
        <div className="about-photo">
          <img src={minhaFoto} alt="Minha Foto" style={{ maxWidth: '120%', height: 'auto' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
