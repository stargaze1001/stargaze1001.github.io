import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://stargaze1001.github.io',
  base: '/',
  // shortcut: local Keystatic admin is dev-only; switch to GitHub storage to enable it in production
  integrations: [react(), markdoc(), ...(isDev ? [keystatic()] : [])],
});
