import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://chethanagopinath.me',
  integrations: [
    mdx(), 
    sitemap(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
  output: "server",
  adapter: vercel()
});