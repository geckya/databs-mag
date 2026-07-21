import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Confirmed live at gecky.me/databs-mag/ — a path-based project page, not a
  // per-user subdomain. Update both of these (and drop `base` entirely) once
  // this moves to its real custom domain.
  site: 'https://gecky.me',
  base: '/databs-mag/',
  integrations: [mdx()],
});
