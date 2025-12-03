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
        <Header />

        <main>
          <section className="hero">
            <div className="hero-content">
              <h2>Welcome to my Studio</h2>
              <p>Where coffee meets creativity.</p>
            </div>
          </section>

          <Gallery />

          <section id="about" className="about-section">
            <div className="about-container">
              <h2>About Me</h2>
              <p>
                Hi, I'm the artist behind KoffeenKanvas. I believe in the magic of a fresh brew and a blank canvas.
                My work is inspired by the cozy moments of life, the warmth of coffee shops, and the stories found in everyday objects.
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
