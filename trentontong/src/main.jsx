import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles load before any component's CSS module so components can override them.
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
