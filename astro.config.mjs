import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uxproductions.se',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
