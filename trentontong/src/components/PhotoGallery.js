import React, { useState, useEffect } from 'react';
import UKPhoto from '../assets/images/UKphoto.jpg';
import AnotherPhoto from '../assets/images/UKPhoto1.jpg';
import { Container } from 'react-bootstrap';
// Add other images similarly

const images = [
  UKPhoto,
  AnotherPhoto,
  // Add other imported images here
];

function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const intervalId = setInterval(() => {
        setIndex(currentIndex => (currentIndex + 1) % images.length);
      }, 8000); // Change image every 8000 milliseconds (8 seconds)

      return () => clearInterval(intervalId);
    }
  }, [isPaused]);

  const handleNext = () => {
    setIndex((index + 1) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pause for 10 seconds
  };

  const handlePrevious = () => {
    setIndex((index - 1 + images.length) % images.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000); // Pause for 10 seconds
  };

  return (
    <Container id="gallery" className="my-5">
    <div className="photo-gallery-container">
      <div className="photo-gallery">
        {images.map((image, i) => (
          <img
            key={i}
            src={image}
            alt="Travel Photography"
            className={`gallery-image ${i === index ? 'active' : ''}`}
          />
        ))}
      </div>
      <div className="gallery-controls">
        <button onClick={handlePrevious} className="gallery-button">
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="gallery-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => {
                setIndex(i);
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 10000); // Pause for 10 seconds
              }}
            ></span>
          ))}
        </div>
        <button onClick={handleNext} className="gallery-button">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
    </Container>
  );
}

export default PhotoGallery;
