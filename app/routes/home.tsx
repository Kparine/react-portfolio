import type { Route } from './+types/home';
import LegacyHome from '../components/LegacyHome';
import WorkPage from '../ui/WorkPage';
import { V2_IS_DEFAULT } from '../flags';
import { v2Meta } from '../ui/meta';

export const links: Route.LinksFunction = () =>
  V2_IS_DEFAULT
    ? []
    : [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat&family=Raleway&family=Roboto+Mono&display=swap',
        },
      ];

export const meta: Route.MetaFunction = () =>
  V2_IS_DEFAULT
    ? v2Meta(
        undefined,
        'Kevin Parine, senior software engineer focused on frontend platforms, micro-frontend architecture, and developer tooling.',
      )
    : [{ title: 'Kevin Parine' }, { name: 'description', content: 'Kevin Parine, software developer.' }];

export default function Home() {
  return V2_IS_DEFAULT ? <WorkPage /> : <LegacyHome />;
}
