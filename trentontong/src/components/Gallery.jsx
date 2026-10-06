import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import styles from './Gallery.module.css';

// Every WebP in assets/images/gallery, in numeric filename order (1, 2, …, 9, 11, …).
const photos = Object.entries(
  import.meta.glob('../assets/images/gallery/*.webp', { eager: true, import: 'default' }),
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src);

const AUTOPLAY_MS = 8000;

/** One photo over a blurred copy of itself. Invisible until the photo loads, then fades in. */
function Slide({ src, alt, outgoing, onShown }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`${styles.slide} ${loaded ? styles.loaded : ''}`}
      aria-hidden={outgoing || undefined}
      onAnimationEnd={onShown}
    >
      <img className={styles.backdrop} src={src} alt="" />
      <img
        className={styles.photo}
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  // The last slide that finished fading in. It stays underneath the incoming slide so the
  // crossfade goes photo-to-photo, never through the frame's background colour.
  const [settled, setSettled] = useState(0);
  // Slides advance on their own until the visitor uses a control (or if they prefer reduced motion).
  const [autoplay, setAutoplay] = useState(
    () => !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  );

  const touchStart = useRef(null);

  const show = (i) => {
    setAutoplay(false);
    setCurrent((i + photos.length) % photos.length);
  };

  // Swipe left/right on touch screens. Only a mostly-horizontal swipe of 40px or more counts,
  // so vertical scrolling over the photo still works normally.
  const handleTouchStart = (event) => {
    const { clientX, clientY } = event.touches[0];
    touchStart.current = { x: clientX, y: clientY };
  };
  const handleTouchEnd = (event) => {
    if (!touchStart.current) return;
    const { clientX, clientY } = event.changedTouches[0];
    const dx = clientX - touchStart.current.x;
    const dy = clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy)) show(current + (dx < 0 ? 1 : -1));
  };

  useEffect(() => {
    if (!autoplay) return undefined;
    const timer = setTimeout(() => setCurrent((current + 1) % photos.length), AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [current, autoplay]);

  // Preload the next photo so it is ready before it is shown.
  useEffect(() => {
    new Image().src = photos[(current + 1) % photos.length];
  }, [current]);

  const layers = settled === current ? [current] : [settled, current];

  return (
    <section className={styles.gallery} aria-roledescription="carousel" aria-label="Photo gallery">
      <div
        className={styles.frame}
        aria-live={autoplay ? 'off' : 'polite'}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {layers.map((i) => (
          <Slide
            key={i}
            src={photos[i]}
            alt={`Travel photography ${i + 1} of ${photos.length}`}
            outgoing={i !== current}
            onShown={() => setSettled(i)}
          />
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Previous photo"
          onClick={() => show(current - 1)}
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
              aria-current={i === current}
              onClick={() => show(i)}
            />
          ))}
        </div>
        {/* Replaces the dots on phones. Hidden from screen readers: each photo's alt text
            already says "N of total". */}
        <span className={styles.counter} aria-hidden="true">
          {current + 1} / {photos.length}
        </span>
        <button
          type="button"
          className={styles.arrow}
          aria-label="Next photo"
          onClick={() => show(current + 1)}
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
