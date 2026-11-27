/**
 * v2 UI rollout flag.
 *
 * While `V2_IS_DEFAULT` is false, "/" keeps serving the legacy UI and the v2 UI lives at the hidden
 * route `/v2`. v2-only pages (/v2, /about, /resume, /work/*) are unlinked from the legacy UI and marked
 * noindex.
 *
 * To switch: set `V2_IS_DEFAULT = true`, then remove the legacy UI. See CLAUDE.md, "v2 rollout".
 */
export const V2_IS_DEFAULT: boolean = false;
