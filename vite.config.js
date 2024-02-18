import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

import pages from "./pages.config";

export default {
  plugins: [
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    ]),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ...pages
      },
    },
  },
};
