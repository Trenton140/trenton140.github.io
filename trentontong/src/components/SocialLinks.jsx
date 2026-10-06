import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { socialLinks } from '../content.js';
import styles from './SocialLinks.module.css';

const icons = { GitHub: FaGithub, Email: FaEnvelope, LinkedIn: FaLinkedin };

export default function SocialLinks() {
  return (
    <ul className={styles.links}>
      {socialLinks.map(({ label, href }) => {
        const Icon = icons[label];
        const external = href.startsWith('http');
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={label}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
