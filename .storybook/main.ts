/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import type { StorybookConfig } from "@storybook/vue3-vite";
const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(j|sjsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-vue-slots'
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  typescript: {
    check: false,
    skipCompiler: false
  },
  docs: {},
  staticDirs: ['../public', '../assets', '../src']
};
export default config;
