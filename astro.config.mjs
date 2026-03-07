import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com', // Will be updated with config
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [
        sitemap(),
    ],
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
        },
    },
});
