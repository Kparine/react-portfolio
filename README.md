# Professional Portfolio

https://www.kevinparine.com

## Stack

React 19, React Router 8 (pre-rendered static pages), TypeScript, Vite 8. Hosted on Netlify.

## Development

Requires Node 22.22+ (see `.nvmrc`).

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run typecheck # TypeScript
npm run lint      # ESLint
npm test          # Vitest
npm run build     # pre-render → build/client
npm run preview   # serve the production build locally
```

Security headers: `public/_headers`, plus per-page CSP hashes added at build time by `scripts/csp-headers.ts`.
