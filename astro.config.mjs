import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  routing: {
    prefixDefaultLocale: false,
  },
  integrations: [svelte()],
});
