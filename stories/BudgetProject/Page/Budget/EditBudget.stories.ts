import Budget from "@/pages/budget/Budget.vue";
import useBudgetService from "resources/budgetProject/service/BudgetService";
import type { Meta, StoryObj } from "@storybook/vue3";
import { iBudgetDto } from "resources/budgetProject/dto/BudgetDto";

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




