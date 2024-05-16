import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div className={`toggle ${darkMode ? 'dark' : 'light'}`}>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
      </div>
    </div>
  );
}

export default DarkModeToggle;
