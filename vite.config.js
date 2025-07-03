import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/f8-multiple-page" : "/",
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        course: path.resolve(__dirname, "src/course.html"),
        shop: path.resolve(__dirname, "src/shop.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        //... add other pages as needed
      },
    },
  },
  plugins: [ViteEjsPlugin()],
});
