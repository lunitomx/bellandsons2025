// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bellandsons.com.mx',

  vite: {
    plugins: [tailwindcss()],
  },

  redirects: {
    // Blog article redirects (.html -> clean URLs)
    '/blog/lambrin-wpc-queretaro.html': '/blog/lambrin-wpc-queretaro',
    '/blog/wpc-vs-marmol-pvc.html': '/blog/wpc-vs-marmol-pvc',
    '/blog/calculo-lambrin-wpc-m2.html': '/blog/calculo-lambrin-wpc-m2',
    '/blog/lambrin-wpc-que-es-colores-usos.html': '/blog/lambrin-wpc-que-es-colores-usos',
    '/blog/mantenimiento-pisos-wpc.html': '/blog/mantenimiento-pisos-wpc',
    '/blog/tendencias-pisos-wpc-2025.html': '/blog/tendencias-pisos-wpc-2025',

    // Legacy redirect (2024 -> 2025)
    '/blog/tendencias-pisos-wpc-2024': '/blog/tendencias-pisos-wpc-2025',
    '/blog/tendencias-pisos-wpc-2024.html': '/blog/tendencias-pisos-wpc-2025',

    // Page redirects
    '/sucursal-la-noria.html': '/sucursal-la-noria',
    '/sucursal-arcos.html': '/sucursal-arcos',
    '/index.html': '/',
  },

  integrations: [mdx(), sitemap()],
});