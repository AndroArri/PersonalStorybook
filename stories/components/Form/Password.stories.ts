
import Password, { iPasswordProps } from "@/components/form/Password.vue";

const slotValue = "slotValue";
const passwordProps: iPasswordProps = {
    id: "inputswitch",
    feedback: false
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Password,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        slots: {
            default: {
                description: "Slot di default",
                template: `<span> ${slotValue} </span>`
            }
        }
    },
    args: passwordProps
};

export const Default = {
    parameters: {
        slots: {
            default: {
                template: "Default"
            }
        }
    }
};