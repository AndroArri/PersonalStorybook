import PrimeVue from "primevue/config";
import { Preview, setup } from "@storybook/vue3";
import Ripple from "primevue/ripple";
import { themes } from "@storybook/theming";
import { withThemeByClassName } from "@storybook/addon-themes";
import Lara from "../resources/js/components/presets/Lara/index";
import { initialize, mswLoader } from 'msw-storybook-addon';

// Import global styles
import "/resources/css/app.css";
import "primeicons/primeicons.css";
// Import composable
// Toast service
import ToastService from "primevue/toastservice";
// Initialize MSW
initialize();

setup((app) => {
  app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
    ripple: true,
  });
  app.directive("ripple", Ripple);
  app.use(ToastService);
});

const preview: Preview = {
  parameters: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    light: { ...themes.normal, appBg: "red" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader]
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];

export default preview;
