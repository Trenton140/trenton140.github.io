import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Self-hosted fonts, bundled by Vite (no third-party font requests).
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import '@fontsource/instrument-serif';
// Global styles load before any component's CSS module so components can override them.
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
