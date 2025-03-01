import exemploGoPlanning from '../assets/imagens/exemplo_goplanning.png';
import exemploTCC from '../assets/imagens/exemplo_tcc.png';
import javaIcon from '../assets/java-icon.svg';
import jsIcon from '../assets/js-icon.svg';
import sqlIcon from '../assets/mysql-icon.svg';
import nodeIcon from '../assets/node-icon.svg';
import reactIcon from '../assets/react-icon.svg';

import '../styles/Projects.css';

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
    image: exemploGoPlanning,
    link: "https://goplanningdemo.netlify.app",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2",
    image: exemploTCC,
    link: "https://github.com/seu-usuario/projeto1",
  },

];

const languages = [
  { name: "JavaScript", image: jsIcon, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "React", image: reactIcon, link: "https://reactjs.org/" },
  { name: "Java", image: javaIcon, link: "https://www.java.com/" },
  { name: "MySQL", image: sqlIcon, link: "https://www.mysql.com/" },
  { name: "NodeJS", image: nodeIcon, link: "https://nodejs.org/" },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-header">Meus Projetos</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card-link"
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="languages-section">
        <h3>Minhas Linguagens</h3>
        <div className="languages-container">
          {languages.map((lang, index) => (
            <a key={index} href={lang.link} target="_blank" rel="noopener noreferrer" className="language-link">
              <img src={lang.image} alt={lang.name} className="language-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
