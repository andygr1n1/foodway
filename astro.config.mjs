import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
//   vite: {
//     ssr: {
//       noExternal: ['package-name']
//     }
//   },
  integrations: [tailwind(), preact()]
});