import { cleanup, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import Home, { meta } from './home';

afterEach(cleanup);

function renderHome(path = '/') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v2" element={<h1>v2 home</h1>} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('home route', () => {
  it('renders every section in order', () => {
    const { container } = renderHome();
    const headings = Array.from(container.querySelectorAll('h1')).map((h) =>
      h.textContent.replace(/\s+/g, '').toLowerCase(),
    );
    expect(headings).toEqual(['about.', 'projects.', 'contact.']);
    expect(screen.getAllByText(/Kevin Parine/).length).toBeGreaterThan(0);
  });

  it('keeps the Paris Gore photo credit', () => {
    renderHome();
    expect(screen.getByText('Image by Paris Gore (@parisgore)')).toBeTruthy();
  });

  it('opens the résumé in a new tab without leaking the opener', () => {
    renderHome();
    const resume = screen.getByRole('link', { name: 'View Resume' });
    expect(resume.getAttribute('target')).toBe('_blank');
    expect(resume.getAttribute('rel')).toBe('noopener noreferrer');
    expect(resume.getAttribute('href')).toMatch(/^https:\/\/drive\.google\.com\//);
  });

  it('describes every image', () => {
    const { container } = renderHome();
    for (const img of Array.from(container.querySelectorAll('img'))) {
      const alt = img.getAttribute('alt') ?? '';
      expect(alt.trim()).not.toBe('');
      expect(alt).not.toBe('Logo');
    }
  });

  it('links contact profiles by name', () => {
    renderHome();
    const contact = screen.getByText('Seattle, WA').parentElement;
    expect(contact).not.toBeNull();
    if (!contact) return;
    expect(within(contact).getByRole('link', { name: 'GitHub' }).getAttribute('href')).toBe(
      'https://github.com/Kparine',
    );
    expect(within(contact).getByRole('link', { name: 'LinkedIn' })).toBeTruthy();
  });

  it('sets the page title and description', () => {
    const tags = meta({} as Parameters<typeof meta>[0]);
    expect(tags).toContainEqual({ title: 'Kevin Parine' });
    expect(tags).toContainEqual(expect.objectContaining({ name: 'description' }));
  });
});

describe('v2 flag on the home route', () => {
  it('redirects ?ui=v2 to the v2 home page', async () => {
    renderHome('/?ui=v2');
    expect(await screen.findByRole('heading', { name: 'v2 home' })).toBeTruthy();
  });

  it('redirects #v2 to the v2 home page', async () => {
    renderHome('/#v2');
    expect(await screen.findByRole('heading', { name: 'v2 home' })).toBeTruthy();
  });

  it('keeps the legacy UI for other values', () => {
    renderHome('/?ui=b');
    expect(screen.queryByRole('heading', { name: 'v2 home' })).toBeNull();
    expect(screen.getByText('Image by Paris Gore (@parisgore)')).toBeTruthy();
  });
});
