import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="vignette">
          <h1 className="hero-title">
            <span className="react">REACT</span> 
            <span className="developer">DEVELOPER</span>
          </h1>
        </div>
        <p className="hero-subtitle">
          Tenho 20 anos e sou desenvolvedor frontend. Gosto de resolver problemas usando design e tecnologia.
        </p>
      </div>
    </section>
  );
};

export default Hero;
