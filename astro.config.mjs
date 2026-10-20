// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders, memoryCache } from "astro/config";
import { SITE_URL, PORT } from "./src/lib/consts";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  fonts: [
    {
      provider: fontProviders.npm({ remote: false }),
      name: "Geist Mono Variable",
      cssVariable: "--font-geist-mono",
    },
  ],

  integrations: [mdx(), sitemap(), react()],

  server: {
    port: PORT,
  },

  vite: {
    resolve: { tsconfigPaths: true },
    plugins: [tailwindcss()],
  },

  output: "server",

  prefetch: {
    defaultStrategy: "hover",
  },

  adapter: node({
    mode: "standalone",
  }),
  cache: {
    provider: memoryCache(),
  },
});
