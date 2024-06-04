import { fn } from "@storybook/test";
import Button, { eSeverity, eSize, iButtonProps } from "@/components/button/Button.vue"
import { PrimeIcons, PrimeIconsOptions } from "primevue/api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: Object.values(eSize),
        },
        severity: {
            control: { type: "select" },
            options: Object.values(eSeverity),
            if: { arg: "link", truthy: false },
        },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onClick: fn() },
};

const ButtonProps: iButtonProps = {
    id: "Template",
    label: "Template",
}


// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
    args: Object.assign({}, ButtonProps),
};

export const Link = {
    args: Object.assign({}, ButtonProps)
};
Link.args.label = "Link!";
Link.args.link = "www.google.it";

export const Icon = {
    args: Object.assign({}, ButtonProps)
};

Icon.args.label = "Icon";
Icon.args.icon = PrimeIcons.CHECK;

export const Disabled = {
    args: Object.assign({}, ButtonProps)
};

Disabled.args.label = "Disabled";
Disabled.args.disabled = true;

export const Square = {
    args: Object.assign({}, ButtonProps)
}

Square.args.label = "Squared";
Square.args.rounded = false;

export const Badges = {
    args: Object.assign({}, ButtonProps)
}

Badges.args.label = "Badges";
Badges.args.badges = "2";
