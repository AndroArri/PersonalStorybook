import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [vue(), nodePolyfills()],
  resolve: {
    alias: {
      "src": path.join(__dirname, "/src/"),
      "assets": path.join(__dirname, "/assets")
    },
  },
});
