# trentontong.com

Source for [trentontong.com](https://trentontong.com), a single-page React site built with Vite.
Pushing to `main` deploys it to GitHub Pages automatically.

Requires Node 22.12 or newer.

```bash
npm ci                    # install dependencies
npm run dev               # local dev server at http://localhost:5173
npm run lint              # lint (oxlint)
npm test                  # run tests (Vitest)
npm run build             # production build → build/
npm run preview           # serve the production build locally
npm run optimize-images   # convert source-images/*.jpg → src/assets/images/*.webp
```

- **Text and links** live in `src/content.js`.
- **Colours** (light and dark theme) are CSS variables at the top of `src/index.css`.
- **Gallery photos**: add a JPG to `source-images/gallery/`, run `npm run optimize-images`, and
  commit the new WebP. The gallery picks it up automatically.
