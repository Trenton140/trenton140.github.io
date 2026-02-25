import React, { useState, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import backgroundImageLight from '../assets/images/optimized/UKPhoto2.webp';
import backgroundImageDark from '../assets/images/optimized/PlaceMassena1.webp';
import backgroundImageLightFallback from '../assets/images/UKPhoto2.jpg';
import backgroundImageDarkFallback from '../assets/images/PlaceMassena1.jpg';

const webpSupported = (() => {
  try {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } catch {
    return false;
  }
})();

function HeroSection({ darkMode }) {
  const [fadeState, setFadeState] = useState('fade-in');
  const [currentImage, setCurrentImage] = useState(
    webpSupported ? backgroundImageLight : backgroundImageLightFallback
  );

  useEffect(() => {
    setFadeState('fade-out');
    const timer = setTimeout(() => {
      if (darkMode) {
        setCurrentImage(webpSupported ? backgroundImageDark : backgroundImageDarkFallback);
      } else {
        setCurrentImage(webpSupported ? backgroundImageLight : backgroundImageLightFallback);
      }
      setFadeState('fade-in');
    }, 500);

    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <div id="home" className="hero-section" style={{ backgroundImage: `url(${currentImage})` }}>
      <h1>Hi, I'm Trenton</h1>

      <ReactTyped
        strings={['I\'m a computer science graduate.', 'I\'m passionate about fitness and travel.', 'I thrive on tech challenges and new experiences!']}
        typeSpeed={40}
        backSpeed={50}
        style={{ fontSize: '2.5rem' }}
        loop
      />

      <div className="hero-icons">
        <a href="https://github.com/trenton140" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:contact@trentontong.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://www.linkedin.com/in/trentontong" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <a href="#about" className="scroll-down" aria-label="Scroll down">
        <FontAwesomeIcon icon={faChevronDown} />
      </a>
      <div className={`hero-overlay ${fadeState}`}></div>
    </div>
  );
}

export default HeroSection;
