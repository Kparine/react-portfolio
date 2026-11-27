import { V2_IS_DEFAULT } from '../flags';

const SITE = 'Kevin Parine';

/** Page metadata for v2 pages. Until v2 is the default UI, v2 pages are kept out of search. */
export function v2Meta(title: string | undefined, description: string) {
  const full = title ? `${title} · ${SITE}` : `${SITE} · Senior Software Engineer`;
  return [
    { title: full },
    { name: 'description', content: description },
    { property: 'og:title', content: full },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    ...(V2_IS_DEFAULT ? [] : [{ name: 'robots', content: 'noindex' }]),
  ];
}
