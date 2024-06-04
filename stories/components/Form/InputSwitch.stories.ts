
import InputSwitch, { iInputSwitchProps } from "@/components/form/InputSwitch.vue";
const slotValue = "slotValue";
const inputNumberProps: iInputSwitchProps = {
    id: "inputswitch",
    invalid: false
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: InputSwitch,
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
    args: inputNumberProps
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