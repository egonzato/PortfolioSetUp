import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const repo = 'PortfolioSetUp';

export default defineConfig({
  integrations: [react(), tailwind()],
  base: `/${repo}/`,
  output: 'static',
});