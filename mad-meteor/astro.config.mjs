import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

export default defineConfig({
  output: 'static',
  base: '/mio-portfolio/', // usa il nome del repo
  integrations: [github()],
});
