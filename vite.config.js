import { ViteWebfontDownload } from "vite-plugin-webfont-dl";
import pages from "./pages.config";
import {rollupVersion} from "vite";

// const pagesInput = {}
// pages.forEach((page) => {
//   pagesInput[page.name] = page.path
// })
export default {
  plugins: [
    ViteWebfontDownload([
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
    ]),
  ],
  // build: {
  //   rollupOptions: {
  //     input: {
  //       ...pagesInput
  //     }
  //   }
  // }
};
