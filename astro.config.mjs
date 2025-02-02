// @ts-check
import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

import tailwindcss from '@tailwindcss/vite';

import svelte from '@astrojs/svelte';

import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  output: "server", 
  adapter: node({
    mode: "standalone"
  }),

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte(), icon()],
});