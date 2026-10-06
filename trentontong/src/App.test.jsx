import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App.jsx';
import { navLinks } from './content.js';

afterEach(() => {
  cleanup();
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

describe('App', () => {
  it('has a nav link for every section', () => {
    render(<App />);
    for (const { id, label } of navLinks) {
      expect(screen.getByRole('link', { name: label }).getAttribute('href')).toBe(`#${id}`);
      expect(document.getElementById(id)).not.toBeNull();
    }
  });

  it('switches to dark mode and remembers the choice', () => {
    render(<App />);
    const toggle = screen.getByRole('switch', { name: 'Dark mode' });
    expect(toggle.getAttribute('aria-checked')).toBe('false');

    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');

    fireEvent.click(toggle);
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('starts in the theme the page loaded with', () => {
    document.documentElement.dataset.theme = 'dark';
    render(<App />);
    expect(screen.getByRole('switch', { name: 'Dark mode' }).getAttribute('aria-checked')).toBe('true');
  });
});
