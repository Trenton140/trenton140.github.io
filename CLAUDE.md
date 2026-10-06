# CLAUDE.md

Personal website for Trenton Tong, served at **https://trentontong.com** via GitHub Pages.
A single-page React 19 app built with Vite. Plain CSS (CSS Modules + theme variables), no UI framework.

## Repository layout

```
/                          repo root (Trenton140/trenton140.github.io)
├── CNAME                  "trentontong.com" — DO NOT delete or edit (see below)
├── .github/workflows/
│   ├── deploy.yml         lint + test + build trentontong/, deploy to Pages on push to main
│   └── build-check.yml    lint + test + build (no deploy) on pull requests into main
└── trentontong/           the app — run all npm commands from here
    ├── index.html         HTML shell: meta tags, canonical URL, inline theme script
    ├── vite.config.js     build output goes to build/ (deploy.yml depends on that); Vitest config
    ├── .oxlintrc.json     lint rules (oxlint)
    ├── public/            copied as-is into build/
    │   └── CNAME          "trentontong.com" — DO NOT delete
    ├── source-images/     original JPGs, input for the optimizer (not bundled)
    ├── scripts/
    │   └── optimize-images.js   source-images/ JPG → src/assets/images/ WebP via sharp
    └── src/
        ├── main.jsx       entry; loads index.css, renders <App/>
        ├── App.jsx        page structure: Header, Hero, then one <Section> per nav item, Footer
        ├── content.js     ALL site text and links (about, experience, projects, taglines, …)
        ├── index.css      theme tokens (light + dark), base styles, shared .container/.card
        ├── hooks/         useTheme (dark mode), useTypewriter (hero tagline)
        ├── components/    one component per piece of UI, each with a co-located .module.css
        └── assets/images/ committed WebP files (hero-light, hero-dark, profile, gallery/*)
```

## How things work

- **Editing content**: change `src/content.js`. Components only handle layout. Experience/project
  entries are `{ title, org, dates, description? }`. A new section needs a `navLinks` entry in
  `content.js` and a matching `<Section id=…>` in `App.jsx`.
- **Dark mode**: the theme is the `data-theme` attribute (`light` | `dark`) on `<html>`. An inline
  script in `index.html` sets it before first paint from `localStorage['theme']`, falling back to
  the OS `prefers-color-scheme`. `useTheme` (used only by `ThemeToggle`) flips it and saves it.
  All colours are CSS variables in `src/index.css`: `:root` holds the light values and
  `:root[data-theme='dark']` overrides them. Components use only these variables, so **to restyle
  dark mode, edit the token block**, not individual components. The only per-theme rule outside it
  is the hero background photo in `Hero.module.css`.
- **Images**: WebP only (supported by every current browser). To add a gallery photo: drop the JPG
  in `source-images/gallery/`, run `npm run optimize-images`, and commit the new
  `src/assets/images/gallery/*.webp`. `Gallery.jsx` picks up every file in that folder
  automatically (`import.meta.glob`), sorted by numeric filename. CI does **not** run the optimizer.
  The WebP files must be committed.

## Develop, test, build

Requires **Node 22.12+** (CI uses Node 22). All commands run from `trentontong/`.

```bash
npm ci                    # install exactly what package-lock.json pins
npm run dev               # dev server with hot reload at http://localhost:5173
npm run lint              # oxlint; warnings fail (--deny-warnings), same as CI
npm test                  # Vitest + Testing Library (jsdom), single run
npm run build             # production bundle → trentontong/build/ (gitignored)
npm run preview           # serve the production build at http://localhost:4173
npm run optimize-images   # regenerate WebP files from source-images/
```

Before pushing, run `npm run lint && npm test && npm run build`. That is exactly what CI runs.

## Deployment

Deployment is automatic: **every push to `main` runs `.github/workflows/deploy.yml`**, which runs
`npm ci`, `npm run lint`, `npm test`, `npm run build` in `trentontong/` (Node 22), uploads
`trentontong/build` as a Pages artifact, and publishes it with `actions/deploy-pages`. It can also
be run manually from the Actions tab (`workflow_dispatch`). If any step fails, nothing is
published and the live site stays on the last good deploy.

Requires repo **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.

Pull requests into `main` run `.github/workflows/build-check.yml`, which runs the same steps without
deploying. Pages has no per-PR preview URLs, so preview with `npm run dev` or `npm run preview` locally.

After a deploy, if a change isn't visible, it's usually caching (the site is behind Cloudflare):
hard-refresh, or purge the cache in Cloudflare → Caching → Purge Everything.

Legacy, do not use: the `gh-pages` branch was the old publishing source (filled by a manual
`npm run deploy`, which no longer exists). Once Pages is set to "GitHub Actions" it is not served.

## Custom domain / CNAME — must be preserved

The site's custom domain is `trentontong.com`. Two `CNAME` files hold it, each containing exactly
`trentontong.com`:

- `/CNAME` (repo root)
- `/trentontong/public/CNAME`, which Vite copies into `build/CNAME` on every build

Rules:
- Never delete, rename, or change either file, and never move `public/CNAME` out of `public/`.
- Don't set a `base` subpath in `vite.config.js`. The site is served from the domain root, so it
  must stay at the default `/`.
- With the Actions deploy, GitHub actually reads the domain from **Settings → Pages → Custom domain**
  (it ignores CNAME files in the artifact). That setting must stay `trentontong.com`. The CNAME
  files are kept as the in-repo record of the domain and as a safeguard for any branch-based deploy.
- DNS is on **Cloudflare**, with the records proxied (orange cloud), and **Cloudflare terminates
  HTTPS**. GitHub's "Enforce HTTPS" is greyed out ("domain not properly configured") because the
  domain resolves to Cloudflare, not GitHub; that is expected, so leave it. In Cloudflare keep
  SSL/TLS mode on **Full** or **Full (strict)** (never **Flexible**, which causes redirect loops
  with Pages) and "Always Use HTTPS" on. Don't un-proxy or repoint the records without a reason.
- Why this matters: under the old `gh-pages` flow, `build/` had no CNAME, so every deploy wiped
  the custom domain and it had to be re-added by hand (see the repeated "Create CNAME" commits on
  the `gh-pages` branch).
