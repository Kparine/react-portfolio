import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('v2', 'routes/v2.tsx'),
  route('about', 'routes/about.tsx'),
  route('resume', 'routes/resume.tsx'),
  route('work/:slug', 'routes/work.tsx'),
] satisfies RouteConfig;
