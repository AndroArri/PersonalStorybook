import IconPicker from "@/components/form/IconPicker.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof IconPicker> = {
    component: IconPicker
};

export default meta;

type Story = StoryObj<typeof IconPicker>;

export const Template: Story = {
    render: (args) => ({
        components: { IconPicker },
        setup() {
            return { args };
        },
        template: '<IconPicker v-bind="args" />'
    }),
    args: {
        id: "iconPicker"
    },
    parameters: {
        slots: {
            default: {
                template: "Template"
            }
        }
    }
}