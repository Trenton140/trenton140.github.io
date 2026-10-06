# CLAUDE.md

Personal website for Trenton Tong, served at **https://trentontong.com** via GitHub Pages.
A single-page React 18 app (Create React App + react-bootstrap).

## Repository layout

```
/                          repo root (Trenton140/trenton140.github.io)
├── CNAME                  "trentontong.com" — DO NOT delete or edit (see below)
├── .github/workflows/
│   ├── deploy.yml         builds trentontong/ and deploys to Pages on push to main
│   └── build-check.yml    builds (no deploy) on pull requests into main
└── trentontong/           the app — run all npm commands from here
    ├── package.json       CRA scripts; homepage path must stay "/"
    ├── public/
    │   ├── CNAME          "trentontong.com" — copied into build/ — DO NOT delete
    │   └── index.html     HTML shell (meta tags, canonical URL)
    ├── scripts/
    │   └── optimize-images.js   JPG → WebP via sharp
    └── src/
        ├── index.js       entry; imports Bootstrap CSS, renders <App/>
        ├── App.js         composes the page sections; owns dark-mode state
        ├── App.css        almost all styling, incl. body.dark-mode overrides
        ├── index.css      base/global styles
        ├── components/    one file per page section (see below)
        └── assets/images/
            ├── *.jpg, gallery/*.jpg   originals (kept as fallbacks)
            └── optimized/             committed WebP output of optimize-images
```

`trentontong/README.md` is unmodified CRA boilerplate.

### Components (`trentontong/src/components/`)

Rendered in this order by `App.js`: `DarkModeToggle`, `Navigation`, `HeroSection`, `About`,
`Experience`, `Projects`, `PhotoGallery`, `Footer`. `Contact.js` exists but is commented out in `App.js`.

- **Dark mode**: `App.js` holds `darkMode` state, persists it to `localStorage['dark-mode']`, and
  toggles the `dark-mode` class on `<body>`. Sections receive `darkMode` as a prop; most visual
  changes live in `App.css` under `body.dark-mode …`.
- **Images**: components import from `src/assets/images/optimized/*.webp`. `HeroSection` and `About`
  fall back to the original JPGs when WebP is unsupported; `PhotoGallery` uses WebP only.
  To add a gallery photo: drop the JPG in `src/assets/images/gallery/`, run
  `npm run optimize-images`, commit the new `.webp`, and add a `require(...)` line to the
  `images` array in `PhotoGallery.js`. CI does **not** run the optimizer — the WebP files must be committed.

## Build and preview

All commands run from `trentontong/`.

```bash
npm ci                      # install exactly what package-lock.json pins
npm start                   # dev server with hot reload at http://localhost:3000
npm run build               # production bundle → trentontong/build/ (gitignored)
npx serve -s build          # preview the production build locally
npm run optimize-images     # regenerate WebP files (needs the sharp devDependency)
```

There are currently no tests (`npm test` finds nothing).

**Check a build the way CI does before pushing.** GitHub Actions sets `CI=true`, which makes
CRA treat every ESLint warning (e.g. an unused import) as a build-breaking error:

```bash
CI=true npm run build                       # bash
$env:CI='true'; npm run build; $env:CI=''   # PowerShell
```

## Deployment

Deployment is automatic: **every push to `main` runs `.github/workflows/deploy.yml`**, which does
`npm ci` + `npm run build` in `trentontong/` (Node 22), uploads `trentontong/build` as a Pages
artifact, and publishes it with `actions/deploy-pages`. It can also be run manually from the
Actions tab (`workflow_dispatch`). A failed build means nothing is published; the live site stays
on the last good deploy.

Requires repo **Settings → Pages → Build and deployment → Source = "GitHub Actions"**.

Pull requests into `main` run `.github/workflows/build-check.yml`, which does the same install and
build but doesn't deploy. Use it to confirm a branch builds before merging. Pages has no per-PR preview
URLs, so preview with `npm start` locally.

After a deploy, if a change isn't visible, it's usually caching (the site is behind Cloudflare):
hard-refresh, or purge the cache in Cloudflare → Caching → Purge Everything.

Legacy, do not use:
- The `gh-pages` branch was the old publishing source (filled by running `npm run deploy` by hand).
  Once Pages is set to "GitHub Actions" it is no longer served.
- The `predeploy`/`deploy` scripts in `package.json` belong to that old flow. `gh-pages` is not
  even a dependency, so `npm run deploy` fails as-is.

## Custom domain / CNAME — must be preserved

The site's custom domain is `trentontong.com`. Two `CNAME` files hold it, each containing exactly
`trentontong.com`:

- `/CNAME` (repo root)
- `/trentontong/public/CNAME`, which CRA copies into `build/CNAME` on every build

Rules:
- Never delete, rename, or change either file, and never move `public/CNAME` out of `public/`.
- Don't add a subpath to `homepage` in `package.json` (CRA uses only its path, which must stay `/`).
  The `trenton140.github.io` hostname in it is harmless.
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
