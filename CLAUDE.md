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
  entries are `{ title, org, dates, logo?, description?, points?, sections? }`: `points` renders
  as bullets; `sections` (`[{ heading, dates, points? }]`, newest first) splits one role into teams (dates
  ending in "Present" get the accent marker);
  `logo` is a key (`'td'`, `'telus'`) mapped to an image in `EntryList.jsx`. The site is
  public: keep entries resume-level and leave out employer-internal names, figures, and contact details. A new section needs a `navLinks` entry in
  `content.js` and a matching `<Section id=…>` in `App.jsx`.
- **Dark mode**: the theme is the `data-theme` attribute (`light` | `dark`) on `<html>`. An inline
  script in `index.html` sets it before first paint from `localStorage['theme']`, falling back to
  the OS `prefers-color-scheme`. `useTheme` (used only by `ThemeToggle`) flips it and saves it.
  All colours are CSS variables in `src/index.css`: `:root` holds the light values and
  `:root[data-theme='dark']` overrides them. Components use only these variables, so **to restyle
  dark mode, edit the token block**, not individual components. The only per-theme rule outside it
  is the hero background photo in `Hero.module.css`.
- **Look**: cool mist/ink palette with a single petrol-teal accent (`--accent`), used sparingly (links,
  hovers, active states, section numbers). Fonts are self-hosted via Fontsource packages imported in
  `main.jsx`: Instrument Serif for display (`--font-serif`: hero name, section titles, brand),
  Geist for body (`--font-sans`), Geist Mono for small details (`--font-mono`: dates, tagline,
  section numbers, footer). Check new colour pairs against WCAG AA (4.5:1 for text).
- **Images**: WebP only (supported by every current browser). To add a gallery photo: drop the JPG
  in `source-images/gallery/`, run `npm run optimize-images`, and commit the new
  `src/assets/images/gallery/*.webp`. `Gallery.jsx` picks up every file in that folder
  automatically (`import.meta.glob`), sorted by numeric filename. Company logos live in
  `source-images/logos/` and are listed in the optimizer's `logos` array (lossless WebP output in
  `src/assets/images/logos/`). CI does **not** run the optimizer.
  The WebP files must be committed.

## The private trip app under `public/japan26/`

`trentontong/public/japan26/` is a separate, dependency-free web app (plain HTML, CSS and JS, copied as-is by Vite). It is a
**private app with a public shell**:

- Nothing about the trip may ever be committed here: no itinerary, dates, hotels, names, booking codes or backend address.
  The shell only knows how to join with an invite link, then fetches the plan and shared data from a private backend
  (a Google Apps Script bound to a Google Sheet in the owner's Drive) and keeps them in the phone's local storage.
- The invite link carries the backend's deployment id and a personal key, so neither appears in this repo.
- The plan is updated through the backend's admin endpoint, not by editing files here. The backend code, the plan and the
  keys live in the owner's Drive folder "Japan26 App (private)".
- `index.html` has a strict Content-Security-Policy (no inline scripts or styles). Keep it: build HTML with escaped strings,
  use classes instead of `style=""`, and add no third-party requests.
- `index.html` also refuses to run inside a frame (first lines of `js/app.js`). Keep that guard.
- Look: snow-paper background, indigo ink, one hanko red (`css/app.css` tokens). Two self-hosted OFL fonts in `fonts/`:
  Zen Kaku Gothic New for the interface, DotGothic16 for the till receipt, keypad, times and codes only. Screens stay
  bare until tapped: rows open in place (`fold()`), pages open with a view transition (`go()`).
- Charges are added in the register (`openExp` / `saveExp` in `js/app.js`): the receipt in `#reg` prints live, and
  "Ring it up" feeds, stamps and tears it. The charge is saved by `done()`, which also runs on a timer, so the
  animation can never lose an entry. Sounds are synthesised with WebAudio; there are no audio files.
- Features that need backend API 2 (shared notes, email alerts) hide themselves when `Store.api < 2`.
- After changing any file in that folder, bump `V` in `sw.js` so installed copies update. New files must also be added
  to `ASSETS` there.

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
