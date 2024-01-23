import { ViteWebfontDownload } from "vite-plugin-webfont-dl";

export default {
  plugins: [
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    ]),
  ],
};
