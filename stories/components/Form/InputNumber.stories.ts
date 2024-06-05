
import InputNumber, { iInputNumberProps } from "@/components/form/InputNumber.vue";
import { eInputNumberType } from "resources/budgetProject/enum/components/InputNumberEnum";
const slotValue = "slotValue";
const inputNumberProps: iInputNumberProps = {
    id: "dropdown"
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    component: InputNumber,
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

export const Decimal = {
    parameters: {
        slots: {
            default: {
                template: "Decimal"
            }
        }
    }
};

export const Currency = {
    args: Object.assign({}, inputNumberProps),
    parameters: {
        slots: {
            default: {
                template: "Currency"
            }
        }
    }
}

Currency.args.type = eInputNumberType.currency;

export const percent = {
    args: Object.assign({}, inputNumberProps),
    parameters: {
        slots: {
            default: {
                template: "Percent"
            }
        }
    }
}

percent.args.type = eInputNumberType.percent;