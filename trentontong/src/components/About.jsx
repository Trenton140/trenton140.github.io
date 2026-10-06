import profilePhoto from '../assets/images/profile.webp';
import { about, name } from '../content.js';
import styles from './About.module.css';
import SocialLinks from './SocialLinks.jsx';

export default function About() {
  return (
    <div className={styles.grid}>
      <div className="card">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <SocialLinks />
      </div>
      <img
        src={profilePhoto}
        alt={name}
        className={styles.photo}
        width={250}
        height={250}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
