import { FaMoon, FaSun } from 'react-icons/fa6';
import useTheme from '../hooks/useTheme.js';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  const dark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      className={styles.toggle}
      onClick={toggleTheme}
    >
      <span className={styles.knob}>
        {dark ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
      </span>
    </button>
  );
}
