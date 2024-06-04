import Profile from "@/components/menu/ProfileMenu.vue";


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Profile,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
    }
};

export const Menu = {
    args: {
        profileImg: '/assets/image/Profile.jpg'
    },
};

