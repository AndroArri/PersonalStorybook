import { within, userEvent, expect } from '@storybook/test';
import Card from '/resources/js/components/panel/Card.vue';

export default {
  component: Card,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Defualt = {
    args: {
        type: "login",
        title: "Welcome!",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque accumsan sapien in turpis tincidunt volutpat. Vestibulum convallis magna pulvinar laoreet fermentum. Curabitur euismod, ex at aliquet bibendum, nisi felis efficitur justo, eu dapibus odio sem eget nunc. Aliquam imperdiet pharetra purus, vel gravida turpis dignissim eget. Fusce ultricies at magna sit amet pharetra. Integer pellentesque mi urna, in sollicitudin nibh fermentum in. Suspendisse tempor blandit tincidunt. Nulla tristique mollis dignissim. Donec scelerisque sem lectus, vitae vestibulum est fringilla a. Suspendisse commodo mollis urna, vel eleifend dolor pretium sed. Praesent vel turpis eget turpis imperdiet viverra. Proin ante libero, tempor et dolor in, venenatis semper arcu. Donec gravida felis sed libero pellentesque, non pharetra dolor vehicula.Praesent vel eros ut ipsum pellentesque tincidunt dignissim et nisi. Vivamus pellentesque ornare velit, eget condimentum lorem eleifend non. Duis nec purus sed felis facilisis pretium. Nulla facilisi. Sed vulputate nisi vitae diam ullamcorper tempus. Etiam sit amet suscipit turpis. Etiam rutrum volutpat accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed ultrices felis a elit aliquet, id vehicula justo condimentum."
    }
};
