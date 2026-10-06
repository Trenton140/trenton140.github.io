import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // deploy.yml publishes trentontong/build. Everything in public/ (including CNAME) is copied into it.
  build: { outDir: 'build' },
  test: { environment: 'jsdom' },
});
