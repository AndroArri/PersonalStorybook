
import ColorPicker, { iColorPickerProps } from "@/components/form/ColorPicker.vue";

const slotValue = "slotValue";

const colorpickerProps: iColorPickerProps = {
    id: "Template"
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: ColorPicker,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        slots: {
            default: {
                description: "This slot change the value of the label of ColorPicker",
                template: slotValue
            }
        }
    },
    args: colorpickerProps
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

