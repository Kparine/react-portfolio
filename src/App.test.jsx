import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import App from './App';

it('renders the main sections', () => {
  render(<App />);
  expect(screen.getAllByText(/Kevin Parine/).length).toBeGreaterThan(0);
  expect(screen.getByText(/Image by Paris Gore/)).toBeTruthy();
});
