# CLAUDE.md

Personal portfolio for Kevin Parine — live at https://www.kevinparine.com/ (hosted on Netlify).
Repo: `git@github.com:Kparine/react-portfolio.git`, default branch `main`.

## Status

The site is about to be rebuilt per the **Portfolio Refresh Handoff** (see "Refresh plan" below).
Until the rebuild lands, the code described under "Current site" is what's in production.
No implementation or production changes for the refresh have been made yet (baseline: `30a35f1`).

## Current site (legacy)

Single-page, client-rendered React 16 app on Create React App (`react-scripts` 2.1.8).

```
public/index.html        CRA template; <title>Kevin Parine</title>
src/index.js             ReactDOM.render + serviceWorker.unregister(); imports ./index.css
src/App.js               Section order: NavParallax → About → Projects → Contact → ScrollUpButton → NavFooter
src/components/
  parallax.js            Hero: forest portrait (img/face.jpeg) via react-parallax, name + "Software Developer"
  about.js               Skills line, education, résumé button (Google Drive link), bio (third person)
  projects.js            ECHO (React Native trip check-in app) + Teacher's Pet (Heroku demo — link is broken)
  contact.js             Phone, email, location, GitHub + LinkedIn icons
  footer.js              Contains photo credit "Image by Paris Gore (@parisgore)" — must be preserved
src/img/                 Images; ocean.jpg and anchor.png are unused
src/App.test.js          Only test: app mounts without crashing
```

### Styling (known mess)

There are overlapping Sass paths:
- `src/App.scss` is the source. `App.js` imports it directly (CRA compiles it via `node-sass` aliased to dart `sass`).
- `npm run css-build` also compiles `App.scss` → `src/index.css`, which `index.js` imports. So the same styles are loaded twice.
- `src/App.css` / `App.css.map` are stale, tracked, unused artifacts.
- Bootstrap 4 CSS is imported globally; components use `reactstrap` (`react-bootstrap` is installed but unused).
- Styles are mostly ID selectors (`#aboutStyle`, `#echoRow`, …). Fonts: Montserrat, Roboto Mono, Raleway (Google Fonts).

If you edit legacy styles, edit `App.scss` and run `npm run css-build` so `index.css` stays in sync.

### Commands

```bash
npm install
npm start          # sass watch + CRA dev server on :3000
npm run build      # production build → build/
CI=true npm test   # run the single mount test non-interactively
```

Verified working on Node 17.3.0 / npm 8.3.0 (no `--openssl-legacy-provider` needed).
`.eslintrc` extends `wesbos` (not installed); CRA uses its own `react-app` config from package.json.

### Deployment

Netlify. There's no `netlify.toml` in the repo, so build settings live in the Netlify UI.
**Before shipping anything, confirm the deploy branch, build command/publish dir, and domain mapping in Netlify,
and verify on a Netlify deploy preview before production.**

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

**Recommended stack:** Astro, static routes, case studies as structured Markdown (content collections).
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
- `react-portfolio/` inside this repo is an untracked duplicate clone of the same commit. Ignore it (don't edit or commit it).
