import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [vue(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.join(__dirname, "/resources/js/"),
      resources: path.join(__dirname, "/resources/"),
    },
  },
});
