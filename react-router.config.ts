import type { Config } from '@react-router/dev/config';

export default {
  // Static site: every route is pre-rendered to HTML at build time and
  // hydrated in the browser. No server runtime is deployed.
  ssr: false,
  prerender: ['/'],
} satisfies Config;
