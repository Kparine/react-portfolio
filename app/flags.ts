/**
 * v2 UI rollout flag.
 *
 * While `V2_IS_DEFAULT` is false, "/" keeps serving the legacy UI and the v2 UI lives at `/v2`:
 *   - `/?ui=v2` redirects to `/v2` on Netlify (public/_redirects), before any page loads.
 *   - `/#v2` redirects to `/v2` in the browser (fragments never reach the server).
 * v2-only pages (/v2, /about, /resume, /work/*) are unlinked from the legacy UI and marked noindex.
 *
 * To switch: set `V2_IS_DEFAULT = true`, delete the redirect in public/_redirects, then remove the
 * legacy UI. See CLAUDE.md, "v2 rollout".
 */
export const V2_IS_DEFAULT: boolean = false;

export const V2_PARAM = 'ui';
export const V2_VALUE = 'v2';

export function searchWantsV2(search: string): boolean {
  return new URLSearchParams(search).get(V2_PARAM) === V2_VALUE;
}

export function hashWantsV2(hash: string): boolean {
  return hash === `#${V2_VALUE}`;
}
