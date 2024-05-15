import React from 'react';
import { ReactTyped } from 'react-typed'; // For the typing effect
import backgroundImage from '../assets/images/UKPhoto1.jpg'; // Path to the background image
import { Container } from 'react-bootstrap';

function HeroSection() {
  return (
    <div id="home" className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Main Heading */}
      <h1>Hi, I'm Trenton</h1>
      
      {/* Typed Effect */}
      <ReactTyped
        strings={['', 'Always and Forever.', 'I love Teddy.']}
        typeSpeed={40}
        backSpeed={50}
        style={{ fontSize: '2.5rem' }} // Inline style for the typed text
        loop
        />
      
      {/* Icons */}
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
      
      {/* Scroll Down Arrow */}
      <a href="#about" className="scroll-down">
        <i className="fas fa-chevron-down"></i>
      </a>
    </div>
  );
}

export default HeroSection;
