
import Dropdown, { iDropdownProps, iDropdownOptions } from "@/components/form/Dropdown.vue";

const slotValue = "slotValue";

const numbersOptions: number = 2;

const options: iDropdownOptions[] = [];
for (let index = 0; index < numbersOptions; index++) {
    const option: iDropdownOptions = {
        name: `option-${index}`,
        value: `value-${index}`
    }
    options.push(option);
}

const colorpickerProps: iDropdownProps = {
    id: "dropdown",
    options: options,
    filter: false,
    showClear: false,
    invalid: false,
    disabled: false
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: Dropdown,
    tags: ["autodocs"],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: "fullscreen",
        slots: {
            default: {
                description: "This slot change the value of the label of Dropdown",
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

