
import Textarea, { iTextareaProps } from "@/components/form/Textarea.vue";

const slotValue = "slotValue";
const textareaProps: iTextareaProps = {
    id: "inputswitch",
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Textarea,
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
    args: textareaProps
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