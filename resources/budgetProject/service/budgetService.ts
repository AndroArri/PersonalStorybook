import BudgetDto from "../dto/BudgetDto";
import BudgetData from "resources/budgetProject/data/Budget.json";
import { eInputNumberType } from "../enum/components/InputNumberEnum";
import { eBudgetStatus } from "../enum/budget/BudgetEnum";
import * as fs from "fs";

export default class BudgetService {
    private static PATH_DATA_BUDGET = '../data/Budget.json';
    static getBudgetData(): Promise<BudgetDto[]> {
        return Promise.resolve(this.parseObjArrayDto(BudgetData));
    }

    static getSingleBudget(id: number): Promise<BudgetDto> {
        const singleBudget = BudgetData.find((b) => b.id === id);
        const result = this.parseObjDto(singleBudget);
        return Promise.resolve(result);
    }

    static newBudgetData(budgetDto: BudgetDto): Promise<boolean> {
        BudgetData.push({
            id: Math.random() * 100,
            name: budgetDto.name ?? "",
            color: budgetDto.color ?? "",
            value: budgetDto.value ?? 0,
            type: budgetDto.type ?? "0",
            description: budgetDto.description ?? "",
            status: budgetDto.status ?? "0",
            beginAt: budgetDto.beginAt?.toString() ?? "",
            expireAt: budgetDto.expireAt?.toString() ?? "",
            created_at: new Date().toISOString(),
            deleted_at: null,
            updated_at: new Date().toISOString()
        });
        try {
            fs.writeFileSync(this.PATH_DATA_BUDGET, JSON.stringify(BudgetData), 'utf-8');
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(false);
        }
    }

    static editBudgetData(budgetDto: BudgetDto): Promise<boolean> {
        if (!budgetDto.id) {
            return Promise.reject(false);
        }
        try {
            Object.bind(BudgetData.find((b) => b.id === budgetDto.id), budgetDto);
            fs.writeFileSync(this.PATH_DATA_BUDGET, JSON.stringify(BudgetData), 'utf-8');
            return Promise.resolve(true);
        } catch (error) {
            return Promise.reject(false);
        }
    }

    static deleteBudgetData(budgetDto: BudgetDto): Promise<boolean> {
        if (!budgetDto.id)
            return Promise.reject(false);
        const deleteBudget = BudgetData.splice(BudgetData.findIndex((b) => b.id === budgetDto.id), 1);
        if (deleteBudget)
            return Promise.resolve(true);
        return Promise.reject(false);
    }

    private static parseObjArrayDto(dataDto: any): BudgetDto[] {
        return dataDto.map((data: any) => {
            return this.parseObjDto(data);
        })
    }

    private static parseObjDto(dataDto: any): BudgetDto {
        const result = new BudgetDto({
            id: dataDto.id,
            name: dataDto.name,
            color: dataDto.color,
            value: dataDto.value,
            type: dataDto.type as eInputNumberType,
            description: dataDto.description,
            status: dataDto.status as eBudgetStatus,
            beginAt: new Date(dataDto.beginAt),
            expireAt: new Date(dataDto.expireAt)
        });
        return result;
    }


}