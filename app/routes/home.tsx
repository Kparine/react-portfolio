import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import type { Route } from './+types/home';
import LegacyHome from '../components/LegacyHome';
import WorkPage from '../ui/WorkPage';
import { hashWantsV2, searchWantsV2, V2_IS_DEFAULT } from '../flags';
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

/**
 * Sends `/?ui=v2` and `/#v2` to the v2 home page. Netlify already redirects `?ui=v2` before the
 * page loads; this covers `#v2` (never sent to the server) and the local dev server.
 */
function useV2Redirect() {
  const { search, hash } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (V2_IS_DEFAULT) return;
    if (searchWantsV2(search) || hashWantsV2(hash)) {
      void navigate('/v2', { replace: true });
    }
  }, [search, hash, navigate]);
}

export default function Home() {
  useV2Redirect();
  return V2_IS_DEFAULT ? <WorkPage /> : <LegacyHome />;
}
