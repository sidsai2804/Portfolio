import './Section.css'
const Section = () => {
    return (
      <section >
        <main className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2>What I Do</h2>
            <p>
              I specialize in providing data-driven insights and solutions 
              to help businesses achieve their goals.
            </p>
          </div>
  
          <div className="services-grid">
            <div className="service-card">
              <div className="card-content">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M16 6H3M21 12H3M16 18H3" 
                      stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Statistical Analysis</h3>
                <p>Turn data into actionable insights with advanced statistical models.</p>
                <div className="card-overlay"></div>
              </div>
            </div>
  
            <div className="service-card featured">
              <div className="card-content">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M12 6V12L16 14M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" 
                      stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>Machine Learning</h3>
                <p>Build predictive models to automate decision-making processes.</p>
                <div className="card-overlay"></div>
              </div>
            </div>
  
            <div className="service-card featured">
              <div className="card-content">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M4 4H20M4 12H20M4 20H20" 
                      stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Data Visualization</h3>
                <p>Create compelling dashboards to uncover patterns and trends.</p>
                <div className="card-overlay"></div>
              </div>
            </div>
  
            <div className="service-card">
              <div className="card-content">
                <div className="card-icon">
                  <svg viewBox="0 0 24 24" fill="none" className="icon">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" 
                      stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" 
                      stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" 
                      stroke="currentColor" strokeWidth="2" 
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3>AI Solutions</h3>
                <p>Leverage AI to transform your business operations and strategies.</p>
                <div className="card-overlay"></div>
              </div>   
            </div>
          </div>
        </div>
        </main>
        <div className="stats-container">
          
           <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">AI Models</span>
            </div>
          
        </div>


       
      </section>
     
    );
  };
  
  export default Section;