import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router';
import { afterEach, describe, expect, it } from 'vitest';
import AboutPage from './AboutPage';
import CaseStudyPage from './CaseStudyPage';
import ResumePage from './ResumePage';
import WorkPage from './WorkPage';
import { caseStudies } from './content';
import { v2Meta } from './meta';
import { V2_HOME } from './paths';

afterEach(cleanup);

function renderAt(path: string, ui: ReactNode) {
  return render(<MemoryRouter initialEntries={[path]}>{ui}</MemoryRouter>);
}

describe('Work page', () => {
  it('lists every case study as a radio, with the first selected', () => {
    renderAt('/v2', <WorkPage />);
    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(caseStudies.length);
    expect((radios[0] as HTMLInputElement).checked).toBe(true);
    for (const study of caseStudies) {
      expect(screen.getByRole('radio', { name: new RegExp(study.title) })).toBeTruthy();
    }
  });

  it('selects a project by click', () => {
    renderAt('/v2', <WorkPage />);
    const second = screen.getAllByRole<HTMLInputElement>('radio')[1];
    if (!second) throw new Error('expected two projects');
    fireEvent.click(second);
    expect(second.checked).toBe(true);
  });

  it('renders every summary and case-study link in the HTML, so they work without JavaScript', () => {
    renderAt('/v2', <WorkPage />);
    for (const study of caseStudies) {
      expect(screen.getByText(study.summary)).toBeTruthy();
      const link = screen.getByRole('link', {
        name: new RegExp(`Read the case study: ${study.title}`),
        hidden: true,
      });
      expect(link.getAttribute('href')).toBe(`/work/${study.slug}`);
    }
  });

  it('marks Work as the current page and links home to the v2 Work page', () => {
    renderAt('/v2', <WorkPage />);
    const nav = screen.getByRole('navigation', { name: 'Main' });
    const work = within(nav).getByRole('link', { name: 'Work' });
    expect(work.getAttribute('aria-current')).toBe('page');
    expect(work.getAttribute('href')).toBe(V2_HOME);
  });
});

describe('case study pages', () => {
  it.each(caseStudies)('$title renders its sections and links onward', (study) => {
    renderAt(`/work/${study.slug}`, <CaseStudyPage study={study} />);
    expect(screen.getByRole('heading', { level: 1, name: study.title })).toBeTruthy();
    for (const section of study.sections) {
      expect(screen.getByRole('heading', { level: 2, name: section.heading })).toBeTruthy();
    }
    expect(screen.getByRole('link', { name: '← All work' }).getAttribute('href')).toBe(V2_HOME);
  });

  it('never ships placeholder copy', () => {
    const text = JSON.stringify(caseStudies);
    expect(text).not.toMatch(/TO CONFIRM|TODO|lorem/i);
  });
});

describe('About page', () => {
  it('keeps the photo credit and a contact link', () => {
    renderAt('/about', <AboutPage />);
    expect(screen.getByText('Photo by Paris Gore (@parisgore)')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Get in touch' }).getAttribute('href')).toMatch(/^mailto:/);
    const img = screen.getByRole('img');
    expect(img.getAttribute('alt')).toMatch(/Kevin Parine/);
  });
});

describe('Résumé page', () => {
  it('offers the PDF prominently and lists the most recent role first', () => {
    renderAt('/resume', <ResumePage />);
    const pdf = screen.getByRole('link', { name: /Download PDF/ });
    expect(pdf.getAttribute('rel')).toBe('noopener noreferrer');
    const roles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
    expect(roles[0]).toMatch(/FloQast/);
  });

  it('links roles to their case studies', () => {
    renderAt('/resume', <ResumePage />);
    expect(screen.getByRole('link', { name: /Case study: Build once/ }).getAttribute('href')).toBe(
      '/work/build-once-promote-everywhere',
    );
  });
});

describe('v2 metadata', () => {
  it('keeps v2 pages out of search until v2 is the default', () => {
    expect(v2Meta('About', 'x')).toContainEqual({ name: 'robots', content: 'noindex' });
    expect(v2Meta('About', 'x')).toContainEqual({ title: 'About · Kevin Parine' });
  });
});
