import Budget from "src/js/pages/budget/Budget.vue";
import useBudgetService from "src/budgetProject/service/BudgetService";
import type { Meta, StoryObj } from "@storybook/vue3";

const budgetService = useBudgetService();

const meta: Meta<typeof Budget> = {
    component: Budget
};

export default meta;

type Story = StoryObj<typeof Budget>;

export const Template: Story = {
    render: (args, { loaded: { budget } }) => ({
        components: { Budget },
        setup() {
            return { args, budget: budget };
        },
        template: '<Budget :budget="budget" />'
    }),
    loaders: [
        async () => ({
            budget: await budgetService.getSingleBudget(1),
        })
    ]
}




