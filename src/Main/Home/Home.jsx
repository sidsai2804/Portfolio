
import Section from '../Section/Section';
import './Home.css'


const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <div className="animated-gradient"></div>
          <div className="mainc">
          <div>
            <h1 className="hero-title">
              <span className="gradient-text">Unlock the Future</span>
              <span className="subtitle">with Data Science</span>
            </h1>
          </div>
          <div>
            <p className="hero-description">
              Empowering businesses through advanced analytics, machine learning,
              and AI-driven solutions that transform data into actionable insights.
            </p>
          </div>
          </div>
          
        </div>
      </section>
      
      <Section />
    </div>
  );
};

export default Home;