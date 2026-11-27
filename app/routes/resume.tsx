import type { Route } from './+types/resume';
import ResumePage from '../ui/ResumePage';
import { v2Meta } from '../ui/meta';

export const meta: Route.MetaFunction = () =>
  v2Meta('Résumé', 'Experience and education of Kevin Parine, senior software engineer.');

export default ResumePage;
