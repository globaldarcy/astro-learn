// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://wonderful-fudge-909f73.netlify.app/',
  integrations: [preact()],
});