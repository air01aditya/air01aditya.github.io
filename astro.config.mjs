// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Your GitHub Pages user site. Because the repo is named
  // <username>.github.io, the site is served from the root —
  // no `base` path needed.
  site: 'https://air01aditya.github.io',
  // Keep the built CSS readable by older phones: without this the
  // minifier rewrites media queries into a syntax iOS 15 ignores.
  vite: {
    build: {
      cssTarget: ['chrome87', 'safari14', 'firefox78', 'edge88'],
    },
  },
});
