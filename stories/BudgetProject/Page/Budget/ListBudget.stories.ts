import ListBudget from "@/pages/budget/ListBudget.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { budgetRoute } from "src/mocks/budgetMocks";

const meta: Meta<typeof ListBudget> = {
    component: ListBudget,
    parameters: {
        msw: {
            handlers: budgetRoute
        }
    }
};

export default meta;

type Story = StoryObj<typeof ListBudget>;

export const Template: Story = {
    render: (args, { loaded: { allBudget } }) => ({
        components: { ListBudget },
        setup() {
            return { args, allBudget: allBudget };
        },
        template: '<ListBudget :budget="allBudget" />'
    }),

}