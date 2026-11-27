import type { Config } from '@react-router/dev/config';
import { caseStudies } from './app/ui/content';

export default {
  // Static site: every route is pre-rendered to HTML at build time and
  // hydrated in the browser. No server runtime is deployed.
  ssr: false,
  prerender: [
    '/',
    '/v2',
    '/about',
    '/resume',
    ...caseStudies.map((study) => `/work/${study.slug}`),
  ],
} satisfies Config;
