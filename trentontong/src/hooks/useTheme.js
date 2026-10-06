import { useState } from 'react';

// Must match the inline script in index.html, which applies the theme before React loads.
const STORAGE_KEY = 'theme';

/** Returns the current theme ('light' | 'dark') and a function that flips and saves it. */
export default function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  );

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage is unavailable (e.g. blocked cookies); the choice lasts for this visit only.
    }
  };

  return [theme, toggleTheme];
}
