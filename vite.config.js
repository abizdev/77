import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

import eslint from "vite-plugin-eslint";

import pages from "./pages.config";

export default {
  plugins: [
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    ]),
    eslint(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        ...pages,
      },
    },
  },
};
