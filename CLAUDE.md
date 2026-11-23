# CLAUDE.md

Personal portfolio for Kevin Parine — live at https://www.kevinparine.com/ (hosted on Netlify).
Repo: `git@github.com:Kparine/react-portfolio.git`, default branch `main`.

## Status

The site is about to be rebuilt per the **Portfolio Refresh Handoff** (see "Refresh plan" below).
Until the rebuild lands, the code described under "Current site" is what's in production.
Toolchain migrated to Vite + React 19 on `refresh/astro` (user chose Vite over the handoff's Astro recommendation).
The no-JS acceptance checks will need prerendering or similar when the redesign starts.
Production now runs this branch (UI unchanged from the legacy site).

## Current site

Single-page, client-rendered React 19 app built with Vite 8 (migrated off Create React App in Nov 2026;
the UI is intentionally unchanged until the refresh). Node 26 LTS via Homebrew (`.nvmrc`; Vite 8 needs >= 22.12).

```
index.html               Vite entry; <title>Kevin Parine</title>
vite.config.js           React plugin, build → build/, Vitest (jsdom)
src/main.jsx             createRoot + StrictMode
src/App.jsx              Section order: NavParallax → About → Projects → Contact → ScrollUpButton → NavFooter
src/components/
  parallax.jsx           Hero: forest portrait (img/face.jpeg) via react-parallax, name + "Software Developer"
  about.jsx              Skills line, education, résumé button (Google Drive link), bio (third person)
  projects.jsx           ECHO (React Native trip check-in app) + Teacher's Pet (dead Heroku demo link removed; GitHub link kept)
  contact.jsx            Phone, email, location, GitHub + LinkedIn icons
  scrollUp.jsx           Back-to-top button (replaced react-scroll-up-button, which has no React 19 support)
  footer.jsx             Contains photo credit "Image by Paris Gore (@parisgore)" — must be preserved
src/App.scss             Only stylesheet (Sass, compiled by Vite). Mostly ID selectors.
src/img/                 Images (face.jpeg is 436 KB; optimize during the redesign)
public/_headers          Netlify security headers (CSP etc.). Update the CSP when adding external hosts.
eslint.config.js         ESLint 10 flat config (react-hooks, react-refresh)
src/App.test.jsx         Smoke test: renders, includes name and photo credit
```

Styling: Bootstrap 5 CSS imported globally; components use `reactstrap` 9. Fonts: Montserrat, Roboto Mono,
Raleway (Google Fonts `@import` in App.scss). Keep all React-related packages on their latest versions.

### Commands

```bash
npm install
npm run dev        # Vite dev server on :5173
npm run build      # production build → build/
npm run preview    # serve build/ on :4173
npm test           # Vitest, non-interactive
npm run lint       # ESLint
```

If npm fails with `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`, Homebrew's OpenSSL lost its CA link:
`brew postinstall ca-certificates openssl@4`.

### Deployment

Netlify site `festive-hopper-1a00f9` (id `d7317c89-15ef-4c37-92fb-dc38fd0865c9`) serves www.kevinparine.com;
the apex domain 301s to www. **Deploys are done from this machine with the Netlify CLI** (folder is linked):

```bash
npm run build && npm test
netlify deploy --dir=build --alias=refresh-astro   # draft preview → https://refresh-astro--festive-hopper-1a00f9.netlify.app
netlify deploy --prod --dir=build                   # production (only after the user approves the draft)
```

CLI deploys upload the local build, so Netlify's dashboard build settings don't apply.
Rollback: Netlify dashboard → Deploys → publish an earlier deploy.

Dashboard quirks (as of 2026-11-22): the site is GitHub-linked, but its production branch is `master`, which no longer
exists (repo default is `main`), so git pushes don't deploy. The dashboard Node version is 10; `.nvmrc` (26) would
override it on a Netlify-side build. Don't set `NODE_ENV=production` there (it skips devDependencies, including Vite).
First CLI production deploy: 2026-11-22 from `refresh/astro` (`68b4b61`); the previous one was `30a35f1` (2022-01-02).

## Refresh plan (from the handoff)

**Goal:** an artwork-led portfolio for a senior software engineering job search. The homepage should show product judgment and engineering craft through selected work.

**Visual direction (approved):** deep blue-black canvas, restrained sans-serif type, generous negative space, cyan active state.
Compact header. The forest portrait moves to About. Each selected project gets one immersive visual made for that project.
The mockup is a composition reference, not a pixel spec.

**Primary path:** Work → select a project → open its case study. About and Résumé live in the shared nav.

**Pages**
- **Work (home):** defaults to the strongest recent case study. Selecting a project updates its visual, short description, and case-study link together, with brief transitions.
  ECHO's route-trace artwork connects to its trip check-in feature. The second entry (engineering systems) is a placeholder.
  On mobile, the selector goes above the visual and the case-study link stays close to the description.
- **Case studies:** one URL each. Cover the problem, Kevin's role/scope, one decision and its tradeoff, what shipped, and what changed.
  Support claims with approved screenshots, diagrams, or outcomes.
- **About:** forest portrait + first-person bio connecting geology/fieldwork to engineering, plus a contact link. Keep the Paris Gore photo credit.
- **Résumé:** recent roles first, then education, with a prominent PDF download. Each role lists scope, contributions, outcomes, and a case-study link where available.

**Recommended stack (handoff; superseded by Vite + React 19):** Astro, static routes, case studies as structured Markdown (content collections).
Use a single styling pipeline and load interactive artwork only where it helps the story, with optimized still images as the default fallback.

**Build sequence**
1. Gather the current résumé, target roles, and two project candidates (one customer-facing, one engineering systems). Confirm publication rights.
2. Prototype Work with one real case study, one visual, and the full selection interaction. Review on desktop and mobile before making the second visual.
3. Build About, Résumé, and the second case study. Verify project links; fix or drop the broken Teacher's Pet demo.
4. Confirm a Netlify preview, then release to production.

**Acceptance checks**
- Projects can be selected by keyboard, click, and tap, with visible focus and a clear active state.
- `prefers-reduced-motion` gets a still image or an instant transition.
- Project summaries, case-study links, contact, and résumé work **without JavaScript**.
- No horizontal scroll on mobile.
- Direct case-study URLs, the PDF, and outbound links all resolve.
- Check heading structure, contrast, image alt text, page metadata, and social preview (OG) tags.
- Preview performance is compared against the existing site. Primary artwork is responsive; secondary effects are deferred.

**Pending inputs:** case-study content, updated résumé/career details, Netlify deploy settings.
Don't invent career facts, metrics, or outcomes. Use clearly marked placeholders and ask.

## Working conventions

- Work on a feature branch (e.g. `refresh/astro`). Don't commit directly to `main`, since it may auto-deploy to production.
