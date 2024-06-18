
import Checkbox, { ePositionLabel, iCheckboxProps } from "@/components/form/Checkbox.vue";

let slotValue = "slotValue";
const checkboxProps: iCheckboxProps = {
  id: "Template",
  positionLabel: ePositionLabel.Top
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    slots: {
      default: {
        description: "This slot change the label of Checkbox",
        template: slotValue
      }
    }
  },
  args: checkboxProps
}

export const Default = {
  parameters: {
    slots: {
      default: checkboxProps
    }
  }
};

