import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import styles from './Gallery.module.css';

// Every WebP in assets/images/gallery, in numeric filename order (1, 2, …, 9, 11, …).
const photos = Object.entries(
  import.meta.glob('../assets/images/gallery/*.webp', { eager: true, import: 'default' }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const AUTOPLAY_MS = 8000;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  // Slides advance on their own until the visitor uses a control (or if they prefer reduced motion).
  const [autoplay, setAutoplay] = useState(
    () => !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  );

  const show = (i) => {
    setAutoplay(false);
    setIndex((i + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!autoplay) return undefined;
    const timer = setTimeout(() => setIndex((index + 1) % photos.length), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [index, autoplay]);

  // Preload the next photo so it is ready before it is shown.
  useEffect(() => {
    new Image().src = photos[(index + 1) % photos.length];
  }, [index]);

  return (
    <section className={styles.gallery} aria-roledescription="carousel" aria-label="Photo gallery">
      <div className={styles.frame} aria-live={autoplay ? 'off' : 'polite'}>
        {/* A blurred, zoomed copy fills the space around photos that don't match the frame's shape. */}
        <img key={`backdrop-${index}`} className={styles.backdrop} src={photos[index]} alt="" />
        <img
          key={index}
          className={styles.photo}
          src={photos[index]}
          alt={`Travel photography ${index + 1} of ${photos.length}`}
          decoding="async"
        />
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous photo"
          onClick={() => show(index - 1)}
        >
          <FaChevronLeft aria-hidden="true" />
        </button>
        <div className={styles.dots}>
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              className={styles.dot}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => show(i)}
            />
          ))}
        </div>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Next photo"
          onClick={() => show(index + 1)}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
