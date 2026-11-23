import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ScrollUpButton from './ScrollUpButton';

function setScrollY(y: number) {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true });
  act(() => {
    window.dispatchEvent(new Event('scroll'));
  });
}

function mockReducedMotion(reduce: boolean) {
  const fake = (query: string): MediaQueryList =>
    ({ matches: reduce, media: query }) as unknown as MediaQueryList;
  vi.spyOn(window, 'matchMedia').mockImplementation(fake);
}

describe('ScrollUpButton', () => {
  const scrollTo = vi.fn();

  beforeEach(() => {
    window.matchMedia = (() => ({ matches: false })) as unknown as typeof window.matchMedia;
    window.scrollTo = scrollTo;
    scrollTo.mockClear();
    setScrollY(0);
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it('stays hidden and out of the tab order near the top', () => {
    render(<ScrollUpButton showAt={150} />);
    const button = screen.getByRole('button', { name: 'Back to top', hidden: true });
    expect(button.classList.contains('is-visible')).toBe(false);
    expect(button.tabIndex).toBe(-1);
  });

  it('appears after scrolling past the threshold', () => {
    render(<ScrollUpButton showAt={150} />);
    setScrollY(400);
    const button = screen.getByRole('button', { name: 'Back to top' });
    expect(button.classList.contains('is-visible')).toBe(true);
    expect(button.tabIndex).toBe(0);
  });

  it('scrolls smoothly by default', () => {
    mockReducedMotion(false);
    render(<ScrollUpButton />);
    fireEvent.click(screen.getByRole('button', { name: 'Back to top', hidden: true }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });

  it('jumps instantly when the user prefers reduced motion', () => {
    mockReducedMotion(true);
    render(<ScrollUpButton />);
    fireEvent.click(screen.getByRole('button', { name: 'Back to top', hidden: true }));
    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
  });
});
