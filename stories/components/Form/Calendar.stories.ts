
import { eCalendarSelectionMode, iCalendarProps } from "@/components/form/Calendar.vue";
import Calendar from "@/components/form/Calendar.vue";

const slotValue = "slotValue";
const calendarProps: iCalendarProps = {
  id: "Template",
  invalid: false,
  buttonBar: false
}
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  component: Calendar,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: Object.values(eCalendarSelectionMode),
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    template: {
      slot: {
        description: "This slot change the label of Calendar",
        template: slotValue
      }
    }
  },
  args: calendarProps
};

export const Default = {
  parameters: {
    slots: {
      default: {
        template: "Default"
      }
    }
  }
}

