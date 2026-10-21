// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // The site's public address. Change it if you add a custom domain.
  site: 'https://jlramirezcolon.github.io',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
});
