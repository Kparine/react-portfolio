import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { buildPolicy, inlineScriptHashes, urlPathsFor } from './csp-headers';

const sha = (s: string) => `'sha256-${createHash('sha256').update(s).digest('base64')}'`;

describe('inlineScriptHashes', () => {
  it('hashes inline scripts and skips external and empty ones', () => {
    const html =
      '<script>a()</script><script src="/x.js"></script><script type="module">b()</script><script></script>';
    expect(inlineScriptHashes(html)).toEqual([sha('a()'), sha('b()')].sort());
  });

  it('deduplicates identical scripts', () => {
    expect(inlineScriptHashes('<script>a()</script><script>a()</script>')).toHaveLength(1);
  });
});

describe('buildPolicy', () => {
  it("adds hashes to script-src only and never allows 'unsafe-inline' scripts", () => {
    const policy = buildPolicy([sha('a()')]);
    const scriptSrc = policy.split('; ').find((d) => d.startsWith('script-src'));
    expect(scriptSrc).toBe(`script-src 'self' ${sha('a()')}`);
    expect(policy).toContain("frame-ancestors 'none'");
  });
});

describe('urlPathsFor', () => {
  it('maps the root and nested index pages to every URL form', () => {
    expect(urlPathsFor('build/client/index.html')).toEqual(['/', '/index.html']);
    expect(urlPathsFor('build/client/about/index.html')).toEqual([
      '/about',
      '/about/',
      '/about/index.html',
    ]);
  });

  it('maps standalone HTML files with and without the extension', () => {
    expect(urlPathsFor('build/client/404.html')).toEqual(['/404.html', '/404']);
  });
});
