
import InputMask, { eMaskType } from "src/js/components/form/InputMask.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: InputMask,
    tags: ["autodocs"],
    // argTypes: {
    //     size: {
    //         control: { type: "select" },
    //         options: Object.values(eComponentSize)
    //     }
    // },
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        // slots: {
        //     default: {
        //         description: "Slot di default",
        //         template: `<span> ${slotValue} </span>`
        //     }
        // }
    },
};

export const Default = {
    parameters: {
        slots: {
            default: {
                template: "Default"
            }
        },
    },
    args: {
        id: "InputMask",
        maskType: eMaskType.email
    }
};