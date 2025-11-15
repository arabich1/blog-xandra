import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rss from '@astrojs/rss';

// https://astro.build/config
export default defineConfig({
  // Mettez ici l'URL finale de votre site
  site: 'https://mon-blog-xandra.vercel.app', // Exemple, nous le changerons plus tard
  integrations: [
    tailwind(), // Active Tailwind
    sitemap(),  // Crée un sitemap pour le SEO
    rss()       // Crée un flux RSS pour les abonnés
  ]
});
