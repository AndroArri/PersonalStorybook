
import InputText, { eInputTextSize, iInputTextProps } from "@/components/form/InputText.vue";
const slotValue = "slotValue";
const inputTextProps: iInputTextProps = {
    id: "inputswitch",
    invalid: false,
    disabled: false
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: InputText,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: Object.values(eInputTextSize)
        }
    },
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
    args: inputTextProps
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