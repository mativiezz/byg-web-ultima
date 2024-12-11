import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'server', // Set output to 'server' to enable SSR
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
  css: {
    // Enable PostCSS or other preprocessors if needed
    postcss: {
      plugins: {
        tailwindcss: {}, // Ensure Tailwind CSS is included
        autoprefixer: {}, // Automatically add vendor prefixes
      },
    },
  },
});