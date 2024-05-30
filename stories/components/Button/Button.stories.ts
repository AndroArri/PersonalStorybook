import { fn } from "@storybook/test";
import Button from "@/components/button/Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["small", "normal", "large"],
        },
        severity: {
            control: { type: "select" },
            options: [
                "primary",
                "secondary",
                "success",
                "info",
                "warning",
                "help",
                "danger",
            ],
            if: { arg: "link", truthy: false },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const basic = {
    args: {
        severity: "primary",
        label: "Basic",
        size: "normal",
    },
};

export const Link = {
    args: {
        label: "Link",
        link: "www.google.it",
    },
};

export const Icons = {
    args: {
        label: 'icon',
        icon: 'pi pi-check'
    }
};

export const Disabled = {
    args: {
        label: 'disabled',
        disabled: true
    }
}

export const Rounded = {
    args: {
        label: 'Rounded',
        rounded: true
    }
}

export const Badges = {
    args: {
        label: 'Badges',
        badges: "8"
    }
}
