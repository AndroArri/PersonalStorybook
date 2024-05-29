import { fn } from "@storybook/test";
import Header from "/resources/js/components/menu/Header.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Header,
    tags: ["autodocs"],
    ArgTypes: {
        showButtonMenu: {
            control: {
                type: "boolean",
            }
        },
    },
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
};

export const LoggedIn = {
    args: {
        user: {
            name: "Andrea Arrighini",
        },
        profileImg: "/stories/Assets/Profile.jpg",
    },
};

export const LoggedOut = {};
