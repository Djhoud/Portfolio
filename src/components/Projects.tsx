import '../styles/Projects.css';

const projects = [
  {
    title: "Projeto 1",
    description: "Descrição do projeto 1",
  },
  {
    title: "Projeto 2",
    description: "Descrição do projeto 2",
  },
  {
    title: "Projeto 3",
    description: "Descrição do projeto 3",
  },
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
