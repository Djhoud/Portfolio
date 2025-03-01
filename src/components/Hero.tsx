import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-introduction">
          <p className="hero-intro">Oi👋 eu sou o Luiz</p>
        </div>
        <h1 className="hero-title">
          <span className="react">REACT</span>
          <span className="developer">DEVELOPER</span>
        </h1>
        <p className="hero-subtitle">
       TENHO 20 ANOS E SOU UM DESENVOLVEDOR FRONTEND INICIANTE.<br />
         
          GOSTO DE RESOLVER PROBLEMAS USANDO DESIGN E TECNOLOGIA.
        </p>
      </div>
    </section>
  );
};

export default Hero;
