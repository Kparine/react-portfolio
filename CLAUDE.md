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

React 19 + **React Router 8 framework mode** + **TypeScript**, built with Vite 8. `ssr: false` with
`prerender`: every route is rendered to static HTML at build time and hydrated in the browser — no server
runtime. The UI is still the legacy single page (unchanged since 2022) until the redesign lands.
Node 26 LTS (`.nvmrc`; React Router needs >= 22.22).

```
react-router.config.ts   ssr:false, prerender list — add every new route here
vite.config.ts           React Router plugin; ssr.noExternal for CommonJS-only deps (react-parallax)
vitest.config.ts         Tests run without the React Router plugin (jsdom)
netlify.toml             Build command, publish dir build/client, NODE_VERSION (overrides the dashboard)
app/root.tsx             <html> Layout, global CSS/fonts, ErrorBoundary
app/routes.ts            Route table
app/routes/home.tsx      "/" — Hero → About → Projects → Contact → ScrollUpButton → Footer
app/components/*.tsx     Legacy sections. Footer holds "Image by Paris Gore (@parisgore)" — must be preserved
app/types/               Local type declarations (react-parallax ships raw .ts types that fail strict mode)
app/app.scss             Legacy styles (Sass, ID selectors) + Bootstrap 5 CSS
scripts/csp-headers.ts   Post-build: hashes each page's inline scripts into a per-page CSP in _headers
public/_headers          Base security headers; CSP rules are appended at build time
```

TypeScript is strict (`noUncheckedIndexedAccess`, `verbatimModuleSyntax`); ESLint uses
`typescript-eslint` strictTypeChecked. TypeScript is pinned to 6.0.x because typescript-eslint doesn't
support TS 7 yet. Keep all other React-related packages on their latest versions.

### Commands

```bash
npm install
npm run dev        # dev server (React Router)
npm run typecheck  # route typegen + tsc
npm run lint       # ESLint (type-aware)
npm test           # Vitest
npm run build      # pre-render → build/client, then CSP hashing
npm run preview    # serve build/client
```

**CSP:** pre-rendered pages contain inline scripts (router context, hydration). Never add
`'unsafe-inline'` to script-src — `scripts/csp-headers.ts` pins them by hash. To verify a deploy, confirm the
page hydrates with no CSP violations in the console.

If npm fails with `UNABLE_TO_GET_ISSUER_CERT_LOCALLY`, Homebrew's OpenSSL lost its CA link:
`brew postinstall ca-certificates openssl@4`.

### Deployment

Netlify site `festive-hopper-1a00f9` (id `d7317c89-15ef-4c37-92fb-dc38fd0865c9`) serves www.kevinparine.com;
the apex domain 301s to www. The site is linked to GitHub via the Netlify GitHub App.

- **Production deploys from `main`.** Every push to `main` builds on Netlify and goes live. Work on a feature
  branch and merge to `main` only when it's ready to ship.
- Netlify builds use Node from `.nvmrc` (26); `NODE_VERSION=26` is also set as a Netlify env var. The dashboard's
  Dependency management dropdown can't select it — ignore that. Don't set `NODE_ENV=production` (it skips
  devDependencies, including Vite).
- Build settings are in `netlify.toml` (publish dir `build/client`).
- Preview a branch before merging with the CLI (folder is linked):

```bash
npm run build && npm test
netlify deploy --dir=build/client --alias=<branch-name>   # → https://<branch-name>--festive-hopper-1a00f9.netlify.app
```

Rollback: Netlify dashboard → Deploys → publish an earlier deploy. Build logs: `netlify logs -d <deploy-id> -s deploy`.

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

- Work on a feature branch (e.g. `refresh/astro`). Don't commit directly to `main`: it auto-deploys to production.
