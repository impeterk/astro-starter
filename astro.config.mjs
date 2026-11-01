// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders, memoryCache } from "astro/config";
import { SITE_URL, PORT } from "./src/lib/consts";

import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";
import { redact } from "@tanstack/redact/vite";
// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  fonts: [
    {
      provider: fontProviders.npm(),
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
    plugins: [tailwindcss(), redact()],
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
