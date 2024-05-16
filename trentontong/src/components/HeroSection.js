import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed'; // Correct import for ReactTyped
import backgroundImageLight from '../assets/images/UKPhoto2.jpg'; // Light mode image
import backgroundImageDark from '../assets/images/PlaceMassena1.jpg'; // Dark mode image

function HeroSection({ darkMode }) {
  const [fadeState, setFadeState] = useState('fade-in');
  const [currentImage, setCurrentImage] = useState(backgroundImageLight);

  useEffect(() => {
    setFadeState('fade-out');
    const timer = setTimeout(() => {
      setCurrentImage(darkMode ? backgroundImageDark : backgroundImageLight);
      setFadeState('fade-in');
    }, 500); // Half of the transition duration to smoothly switch images

    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <div id="home" className="hero-section" style={{ backgroundImage: `url(${currentImage})` }}>
      <h1>Hi, I'm Trenton</h1>
      
      <ReactTyped
        strings={['I\'m a computer science student.', 'I\'m passionate about fitness and travel.', 'I thrive on tech challenges and new experiences!']}
        typeSpeed={40}
        backSpeed={50}
        style={{ fontSize: '2.5rem' }} // Inline style for the typed text
        loop
      />
      
      <div className="hero-icons">
        <a href="https://github.com/trenton140" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:contact@trentontong.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/trentontong" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      
      <a href="#about" className="scroll-down">
        <i className="fas fa-chevron-down"></i>
      </a>
      <div className={`hero-overlay ${fadeState}`}></div>
    </div>
  );
}

export default HeroSection;
