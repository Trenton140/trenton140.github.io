import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FastAverageColor } from 'fast-average-color';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  require('../assets/images/optimized/gallery/1.webp'),
  require('../assets/images/optimized/gallery/2.webp'),
  require('../assets/images/optimized/gallery/3.webp'),
  require('../assets/images/optimized/gallery/4.webp'),
  require('../assets/images/optimized/gallery/5.webp'),
  require('../assets/images/optimized/gallery/6.webp'),
  require('../assets/images/optimized/gallery/7.webp'),
  require('../assets/images/optimized/gallery/8.webp'),
  require('../assets/images/optimized/gallery/9.webp'),
  require('../assets/images/optimized/gallery/11.webp'),
  require('../assets/images/optimized/gallery/12.webp'),
  require('../assets/images/optimized/gallery/13.webp'),
];

const FADE_DURATION = 1000;
const SLIDE_INTERVAL = 8000;

function PhotoGallery() {
  const [index, setIndex] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const imgRef = useRef(null);
  const [fadeState, setFadeState] = useState('fade-in');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const changeSlide = useCallback((nextIndex) => {
    setIsTransitioning(true);
    setFadeState('fade-out');
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex(nextIndex);
      setFadeState('fade-in');
      setIsTransitioning(false);
    }, FADE_DURATION);
  }, []);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsTransitioning((transitioning) => {
        if (!transitioning) {
          setFadeState('fade-out');
          clearTimeout(timeoutRef.current);
          timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
            setFadeState('fade-in');
            setIsTransitioning(false);
          }, FADE_DURATION);
          return true;
        }
        return transitioning;
      });
    }, SLIDE_INTERVAL);
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  // Extract dominant color from current image
  useEffect(() => {
    const fac = new FastAverageColor();
    const updateBackgroundColor = () => {
      if (imgRef.current) {
        fac.getColorAsync(imgRef.current)
          .then(color => setBackgroundColor(color.hex))
          .catch(() => setBackgroundColor('#ffffff'));
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
    if (isTransitioning) return;
    clearInterval(intervalRef.current);
    changeSlide((index + 1) % images.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    clearInterval(intervalRef.current);
    changeSlide((index - 1 + images.length) % images.length);
  };

  const handleDotClick = (i) => {
    if (isTransitioning || i === index) return;
    clearInterval(intervalRef.current);
    changeSlide(i);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      handleNext();
    }
  };

  return (
    <Container id="gallery" className="my-5">
      <h2>Photography</h2>
      <div
        className="photo-gallery-container"
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Photo gallery"
      >
        <div
          className="photo-gallery"
          style={{
            background: backgroundColor,
            transition: 'background 1s ease-in-out'
          }}
        >
          <img
            src={images[index]}
            alt={`Travel photography ${index + 1} of ${images.length}`}
            ref={imgRef}
            className={`gallery-image ${fadeState}`}
            width={1200}
            height={800}
            decoding="async"
          />
        </div>
        <div className="gallery-controls" role="group" aria-label="Gallery navigation">
          <button
            className="gallery-button"
            onClick={handlePrev}
            aria-label="Previous photo"
            disabled={isTransitioning}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="gallery-dots" role="tablist" aria-label="Select photo">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${index === i ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
                aria-label={`Photo ${i + 1}`}
                aria-selected={index === i}
                role="tab"
              />
            ))}
          </div>
          <button
            className="gallery-button"
            onClick={handleNext}
            aria-label="Next photo"
            disabled={isTransitioning}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default PhotoGallery;
