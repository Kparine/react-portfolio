/**
 * Post-build step: pin every pre-rendered page's inline scripts in its
 * Content-Security-Policy by SHA-256 hash.
 *
 * React Router's pre-rendered HTML includes inline scripts (router context,
 * hydration data, scroll restoration). Rather than allow 'unsafe-inline', this
 * hashes each inline script and appends a per-page CSP rule to Netlify's
 * `_headers` file. Hashes change whenever the page changes, so this must run
 * after every build.
 */
import { createHash } from 'node:crypto';
import { appendFileSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const CLIENT_DIR = 'build/client';

const BASE_POLICY: Record<string, string[]> = {
  'default-src': ["'self'"],
  'script-src': ["'self'"],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
  'font-src': ['https://fonts.gstatic.com'],
  'img-src': ["'self'", 'data:'],
  'connect-src': ["'self'"],
  'manifest-src': ["'self'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'none'"],
  'frame-ancestors': ["'none'"],
};

export function inlineScriptHashes(html: string): string[] {
  const hashes = new Set<string>();
  for (const match of html.matchAll(/<script(?<attrs>[^>]*)>(?<body>[\s\S]*?)<\/script>/g)) {
    const { attrs = '', body = '' } = match.groups ?? {};
    if (/\bsrc=/.test(attrs) || body.length === 0) continue;
    hashes.add(`'sha256-${createHash('sha256').update(body, 'utf8').digest('base64')}'`);
  }
  return [...hashes].sort();
}

export function buildPolicy(hashes: string[]): string {
  return Object.entries(BASE_POLICY)
    .map(([directive, sources]) =>
      [directive, ...sources, ...(directive === 'script-src' ? hashes : [])].join(' '),
    )
    .join('; ');
}

/** URL paths Netlify may serve a given HTML file under. */
export function urlPathsFor(file: string): string[] {
  const rel = relative(CLIENT_DIR, file).split(sep).join('/');
  if (rel === 'index.html') return ['/', '/index.html'];
  if (rel.endsWith('/index.html')) {
    const dir = `/${rel.slice(0, -'/index.html'.length)}`;
    return [dir, `${dir}/`, `/${rel}`];
  }
  return [`/${rel}`, `/${rel.replace(/\.html$/, '')}`];
}

function htmlFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) return entry.name === 'assets' ? [] : htmlFiles(path);
    return entry.name.endsWith('.html') ? [path] : [];
  });
}

function main() {
  const rules = htmlFiles(CLIENT_DIR).flatMap((file) => {
    const policy = buildPolicy(inlineScriptHashes(readFileSync(file, 'utf8')));
    return urlPathsFor(file).map((path) => `${path}\n  Content-Security-Policy: ${policy}\n`);
  });
  appendFileSync(join(CLIENT_DIR, '_headers'), `\n${rules.join('\n')}`);
  console.log(`csp-headers: wrote ${String(rules.length)} per-path CSP rules`);
}

if (import.meta.main) main();
