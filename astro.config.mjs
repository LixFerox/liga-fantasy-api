// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [icon(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
});