import BudgetDto, { iBudgetDto } from "../dto/BudgetDto";
import budgetJson from "assets/data/budget.json";
import { RouteList } from "src/mocks/budgetMocks";

export default function useBudgetService() {
    const BudgetData = parseObjArrayDto(budgetJson);

    const getBudgetData = async (): Promise<iBudgetDto[]> => {
        let allBudget = await fetch(RouteList.allBudget)
            .then((data) => data.json());
        allBudget = JSON.parse(allBudget.data);
        const data = parseObjArrayDto(allBudget);
        return parseObjArrayDto(data);
    }

    const getSingleBudget = (id: number): Promise<iBudgetDto> => {
        const singleBudget = BudgetData.find((b) => b.id == id);
        if (!singleBudget)
            return Promise.reject("Budget not found");
        const result = parseObjDto(singleBudget);
        return Promise.resolve(result);
    }

    const newBudgetData = (budgetDto: iBudgetDto): Promise<iBudgetDto> => {
        const result = {
            id: Math.random() * 100,
            name: budgetDto.name,
            color: budgetDto.color,
            value: budgetDto.value,
            type: budgetDto.type,
            description: budgetDto.description,
            status: budgetDto.status,
            beginAt: budgetDto.beginAt,
            expireAt: budgetDto.expireAt,
            created_at: new Date(),
            updated_at: new Date(),
            bankAccount: budgetDto.bankAccount
        } as iBudgetDto;
        BudgetData.push(result);
        return Promise.resolve(result);
    }

    const editBudgetData = (budgetDto: iBudgetDto): Promise<boolean> => {
        if (!budgetDto.id) {
            return Promise.reject(false);
        }
        Object.bind(BudgetData.find((b) => b.id === budgetDto.id), budgetDto);
        return Promise.resolve(true);
    }

    const deleteBudgetData = (budgetDto: iBudgetDto): Promise<boolean> => {
        if (!budgetDto.id)
            return Promise.reject(false);
        const deleteBudget = BudgetData.splice(BudgetData.findIndex((b) => b.id === budgetDto.id), 1);
        if (deleteBudget)
            return Promise.resolve(true);
        return Promise.reject(false);
    }

    function parseObjArrayDto(dataDto: any): iBudgetDto[] {
        return dataDto.map((data: any) => {
            return parseObjDto(data);
        })
    }

    function parseObjDto(dataDto: any): iBudgetDto {
        const result = new BudgetDto(
            dataDto.name,
            dataDto.color,
            dataDto.value,
            dataDto.type,
            dataDto.status,
            dataDto.bankAccount,
            dataDto.icon,
            dataDto.id,
            dataDto.description,
            dataDto.beginAt,
            dataDto.expireAt,
            dataDto.updatedAt,
            dataDto.createdAt
        );
        return result;
    }

    return {
        getBudgetData,
        getSingleBudget,
        newBudgetData,
        editBudgetData,
        deleteBudgetData,
        parseObjArrayDto,
        parseObjDto
    }
}