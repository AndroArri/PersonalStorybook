import ListBudget from "@/pages/budget/ListBudget.vue";
import useBudgetService from "resources/budgetProject/service/BudgetService";
import type { Meta, StoryObj } from "@storybook/vue3";

const budgetService = useBudgetService();

const meta: Meta<typeof ListBudget> = {
    component: ListBudget
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
    loaders: [
        async () => ({
            allBudget: await budgetService.getBudgetData(),
        })
    ]
}