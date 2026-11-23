import { cleanup, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import Home, { meta } from './home';

afterEach(cleanup);

describe('home route', () => {
  it('renders every section in order', () => {
    const { container } = render(<Home />);
    const headings = Array.from(container.querySelectorAll('h1')).map((h) =>
      h.textContent.replace(/\s+/g, '').toLowerCase(),
    );
    expect(headings).toEqual(['about.', 'projects.', 'contact.']);
    expect(screen.getAllByText(/Kevin Parine/).length).toBeGreaterThan(0);
  });

  it('keeps the Paris Gore photo credit', () => {
    render(<Home />);
    expect(screen.getByText('Image by Paris Gore (@parisgore)')).toBeTruthy();
  });

  it('opens the résumé in a new tab without leaking the opener', () => {
    render(<Home />);
    const resume = screen.getByRole('link', { name: 'View Resume' });
    expect(resume.getAttribute('target')).toBe('_blank');
    expect(resume.getAttribute('rel')).toBe('noopener noreferrer');
    expect(resume.getAttribute('href')).toMatch(/^https:\/\/drive\.google\.com\//);
  });

  it('describes every image', () => {
    const { container } = render(<Home />);
    for (const img of Array.from(container.querySelectorAll('img'))) {
      const alt = img.getAttribute('alt') ?? '';
      expect(alt.trim()).not.toBe('');
      expect(alt).not.toBe('Logo');
    }
  });

  it('links contact profiles by name', () => {
    render(<Home />);
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
