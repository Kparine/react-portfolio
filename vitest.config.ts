import { defineConfig } from 'vitest/config';

// Separate from vite.config.ts: the React Router plugin is for app builds,
// not for rendering components under test.
export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['{app,scripts}/**/*.test.{ts,tsx}'],
  },
});
