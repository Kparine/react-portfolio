import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [reactRouter()],
  ssr: {
    // CommonJS-only package; bundle it so pre-rendering can import it by name.
    noExternal: ['react-parallax'],
  },
});
