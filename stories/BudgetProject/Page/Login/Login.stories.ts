import Login, { ePageType } from "@/pages/auth/Login.vue";

export default {
    component: Login,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
};

export const Register = {
    args:{
        pageType: ePageType.Register
    }
};

export const LogIn = {
    args:{
        pageType: ePageType.Login
    }
};
