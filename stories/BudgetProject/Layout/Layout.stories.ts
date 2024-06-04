import Home from "/resources/js/layouts/Layout.vue";

export default {
    component: Home,
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    },
};

export const LoggedOut = {
    args: {
        user: null,
        profileImg: null,
    },
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
export const LoggedIn = {
    args: {
        user: {
            name: "Andrea Arrighini",
        },
        profileImg: "/stories/Assets/Profile.jpg",
    },
};
