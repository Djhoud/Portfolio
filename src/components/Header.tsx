// src/components/Header.tsx
import '../styles/header.css'; // Certifique-se de que este caminho esteja correto

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><a href="#hero">Início</a></li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
