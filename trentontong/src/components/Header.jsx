import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { name, navLinks } from '../content.js';
import styles from './Header.module.css';
import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <a href="#home" className={styles.brand} onClick={closeMenu}>
          {name}
        </a>
        <ul id="nav-links" className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.actions}>
          <ThemeToggle />
          <button
            type="button"
            className={styles.menuButton}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
