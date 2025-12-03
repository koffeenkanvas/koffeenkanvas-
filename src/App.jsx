import React, { useState } from 'react';
import Intro from './components/Intro';
import Header from './components/Header';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <div className="App">
      {!introComplete && <Intro onComplete={() => setIntroComplete(true)} />}

      <div className={`main-content ${introComplete ? 'visible' : ''}`}>
        <div className="floral-decoration top-right"></div>
        <div className="floral-decoration bottom-left"></div>
        <Header />

        <main>
          <section className="hero">
            <div className="hero-content">
              <h2>My Cozy Kanvas</h2>
              <p>Created with love</p>
            </div>
          </section>

          <Gallery />

          <section id="about" className="about-section">
            <div className="about-container">
              <h2>About Me</h2>
              <p>
                Hi, I’m AJ.
                <br /><br />
                I’m still learning to paint, and this space is where I put the little things I’m trying and exploring.
                Nothing perfect. Just small moments, gentle colors, and the joy of figuring things out.
              </p>
            </div>
          </section>

          <section id="contact" className="contact-section" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <h2>Get in Touch</h2>
            <div className="contact-links" style={{ fontSize: '1.2rem', marginTop: '2rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                <a href="mailto:KOFFEENKANVAS@gmail.com" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>
                  💌 KOFFEENKANVAS@gmail.com
                </a>
              </p>
              <p>
                <a href="https://instagram.com/koffeenkanvas" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--text-color)' }}>
                  📸 @koffeenkanvas
                </a>
              </p>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <p>&copy; 2025 KoffeenKanvas. Brewed with love.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
