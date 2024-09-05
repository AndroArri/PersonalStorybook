import { AsyncResponseResolverReturnType, http, HttpResponse } from "msw";
import budgetJson from "assets/data/Budget.json";
import BudgetDto from "src/budgetProject/dto/BudgetDto";
import ObjService from "src/common/service/ObjService";
import { eInputNumberType } from "src/budgetProject/enum/components/InputNumberEnum";
import { eBudgetStatus } from "src/budgetProject/enum/budget/BudgetEnum";


export enum RouteList {
    allBudget = '/allBudget'
}

export const budgetRoute = [
    http.get(RouteList.allBudget, ({ request }): AsyncResponseResolverReturnType<string> => {
        debugger;
        const url = new URL(request.url);
        const perPage: number = url.searchParams.get('perPage') !== null ? Number(url.searchParams.get('perPage')) : 0;
        const page: number = url.searchParams.get('page') !== null ? Number(url.searchParams.get('page')) : 0;
        const offset: number =  (page - 1) * perPage;
        let res: BudgetDto[] = [];
        budgetJson.forEach((budget, index) => {
            if (offset < index && res.length < perPage) {
                return;
            }
            res.push(
                {
                    id: budget.id,
                    description: budget.description,
                    bankAccount: budget.bankAccount ?? {
                        id: 0,
                        description: '',
                        name: ''
                    },
                    beginAt: new Date(budget.beginAt),
                    color: budget.color,
                    created_at: new Date(budget.created_at),
                    expireAt: new Date(budget.expireAt),
                    icon: budget.icon,
                    name: budget.name,
                    status: ObjService.of(eBudgetStatus).fromStringToValue(budget.status),
                    type: ObjService.of(eInputNumberType).fromStringToValue(budget.type),
                    updated_at: new Date(budget.updated_at),
                    value: budget.value
                }
            )
        })
    })];
