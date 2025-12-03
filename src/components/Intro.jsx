import React, { useEffect, useState } from 'react';
import './Intro.css';

const Intro = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`intro-container ${!visible ? 'fade-out' : ''}`}>
      <div className="brush-stroke">
        <h1 className="intro-title">KoffeenKanvas</h1>
      </div>
    </div>
  );
};

export default Intro;
