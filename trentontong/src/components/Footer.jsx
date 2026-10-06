import { footerNote, name } from '../content.js';
import styles from './Footer.module.css';

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {year} {name}. All rights reserved.
      </p>
      <p>{footerNote}</p>
    </footer>
  );
}
