import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className={`toggle ${darkMode ? 'dark' : 'light'}`}>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </span>
    </button>
  );
}

export default DarkModeToggle;
