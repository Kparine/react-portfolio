// v2 home page (hidden route) while the legacy UI is the default.
// After the switch, "/" renders WorkPage and this route redirects to "/" (or is removed).
import type { Route } from './+types/v2';
import WorkPage from '../ui/WorkPage';
import { v2Meta } from '../ui/meta';

export const meta: Route.MetaFunction = () =>
  v2Meta(
    undefined,
    'Kevin Parine, senior software engineer focused on frontend platforms, micro-frontend architecture, and developer tooling.',
  );

export default WorkPage;
