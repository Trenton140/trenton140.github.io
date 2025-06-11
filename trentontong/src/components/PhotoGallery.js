import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { Container } from 'react-bootstrap';

const images = [
  require('../assets/images/gallery/1.jpg'),
  require('../assets/images/gallery/2.jpg'),
  require('../assets/images/gallery/3.jpg'),
  require('../assets/images/gallery/4.jpg'),
  require('../assets/images/gallery/5.jpg'),
  require('../assets/images/gallery/6.jpg'),
  require('../assets/images/gallery/7.jpg'),
  require('../assets/images/gallery/8.jpg'),
  require('../assets/images/gallery/9.jpg'),
  require('../assets/images/gallery/11.jpg'),
  require('../assets/images/gallery/12.jpg'),
  require('../assets/images/gallery/13.jpg'),
];

function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const imgRef = useRef(null);
  const [fadeState, setFadeState] = useState('fade-in'); // single state for fade
  const intervalRef = useRef(null);

  const startInterval = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setFadeState('fade-out'); // Start fading out
      setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % images.length);
        setFadeState('fade-in'); // Start fading in the next image
      }, 1000); // Transition time for fading out
    }, 8000); // Change image every 8000 milliseconds (8 seconds)
  }, []);

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, [startInterval]);

  useEffect(() => {
    const fac = new FastAverageColor(); // Initialize fac inside useEffect
    const updateBackgroundColor = () => {
      if (imgRef.current) {
        fac.getColorAsync(imgRef.current)
          .then(color => setBackgroundColor(color.hex))
          .catch(e => console.log(e));
      }
    };

    updateBackgroundColor();

    const currentImgRef = imgRef.current;
    if (currentImgRef) {
      currentImgRef.addEventListener('load', updateBackgroundColor);
    }

    return () => {
      if (currentImgRef) {
        currentImgRef.removeEventListener('load', updateBackgroundColor);
      }
    };
  }, [index]);

  const handleNext = () => {
    setFadeState('fade-out'); // Start fading out
    setTimeout(() => {
      setIndex((index + 1) % images.length);
      setFadeState('fade-in'); // Start fading in the next image
    }, 1000); // Transition time for fading out
    startInterval(); // Reset the timer
  };

  const handlePrev = () => {
    setFadeState('fade-out'); // Start fading out
    setTimeout(() => {
      setIndex((index - 1 + images.length) % images.length);
      setFadeState('fade-in'); // Start fading in the previous image
    }, 1000); // Transition time for fading out
    startInterval(); // Reset the timer
  };

  const handleDotClick = (i) => {
    setFadeState('fade-out'); // Start fading out
    setTimeout(() => {
      setIndex(i);
      setFadeState('fade-in'); // Start fading in the selected image
    }, 1000); // Transition time for fading out
    startInterval(); // Reset the timer
  };

  return (
    <Container id="gallery" className="my-5">
      <h2>Photography</h2>
      <div className="photo-gallery-container">
        <div
          className="photo-gallery"
          style={{
            background: backgroundColor,
            transition: 'background 1s ease-in-out'
          }}
        >
          <img
            src={images[index]}
            alt="Travel Photography"
            ref={imgRef}
            className={`gallery-image ${fadeState}`}
            loading="lazy"
          />
        </div>
        <div className="gallery-controls">
          <button
            className="gallery-button"
            onClick={handlePrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="gallery-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${index === i ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
              ></span>
            ))}
          </div>
          <button
            className="gallery-button"
            onClick={handleNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </Container>
  );
}

export default PhotoGallery;
