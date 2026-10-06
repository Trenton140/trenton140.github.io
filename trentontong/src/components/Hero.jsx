import { FaChevronDown } from 'react-icons/fa6';
import { greeting, taglines } from '../content.js';
import useTypewriter from '../hooks/useTypewriter.js';
import styles from './Hero.module.css';
import SocialLinks from './SocialLinks.jsx';

export default function Hero() {
  const typed = useTypewriter(taglines);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{greeting}</h1>
        <p className={styles.tagline}>
          <span aria-hidden="true">
            {typed}
            <span className={styles.cursor}>|</span>
          </span>
          <span className="visually-hidden">{taglines.join(' ')}</span>
        </p>
        <SocialLinks />
      </div>
      <a href="#about" className={styles.scrollDown} aria-label="Scroll to About section">
        <FaChevronDown aria-hidden="true" />
      </a>
    </section>
  );
}
