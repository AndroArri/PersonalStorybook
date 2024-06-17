import Budget from "@/pages/budget/Budget.vue";
import type { Meta, StoryObj } from "@storybook/vue3";
import { eBudgetStatus } from "resources/budgetProject/enum/budget/BudgetEnum";
import { eInputNumberType } from "resources/budgetProject/enum/components/InputNumberEnum";

const meta: Meta<typeof Budget> = {
    component: Budget
};

export default meta;

type Story = StoryObj<typeof Budget>;

export const Template: Story = {
    render: (args) => ({
        components: { Budget },
        setup() {
            return { args };
        },
        template: '<Budget :budget="budget" />'
    }),
    args: {
        budget: {
            id: 0,
            name: "",
            color: "",
            value: 0,
            type: eInputNumberType.currency,
            status: eBudgetStatus.ACTIVE,
            description: "",
            bankAccount: {
                id: 0,
                description: "",
                name: "",
            },
            beginAt: null,
            expireAt: null,
            updatedAt: null,
            createdAt: null,
        }
    }
}
