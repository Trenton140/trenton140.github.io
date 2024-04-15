import React from 'react';
import { ReactTyped } from 'react-typed'; // This is for versions >= 2.0.0

import backgroundImage from '../assets/images/UKPhoto1.jpg'; // Correct path to your image

function HeroSection() {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h1>Hi, I'm Trenton</h1>
      <ReactTyped
        strings={['I love technology.', 'I love travel.', 'I love fitness.']}
        typeSpeed={40}
        backSpeed={50}
        style={{ fontSize: '2.5rem' }} // Add inline styles here
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
    </div>
  );
}

export default HeroSection;
