import type { Route } from './+types/about';
import AboutPage from '../ui/AboutPage';
import { v2Meta } from '../ui/meta';

export const meta: Route.MetaFunction = () =>
  v2Meta('About', 'Kevin Parine: software engineer with a background in geology and fieldwork.');

export default AboutPage;
