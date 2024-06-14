import BudgetDto, { iBudgetDto } from "../dto/BudgetDto";
import budgetJson from "../data/Budget.json";
import { eInputNumberType } from "../enum/components/InputNumberEnum";
import { eBudgetStatus } from "../enum/budget/BudgetEnum";
import { App } from "vue";

class BudgetService {
    BudgetData = this.parseObjArrayDto(budgetJson);

    getBudgetData(): Promise<iBudgetDto[]> {
        return Promise.resolve(this.parseObjArrayDto(this.BudgetData));
    }

    getSingleBudget(id: number): Promise<iBudgetDto> {
        const singleBudget = this.BudgetData.find((b) => b.id === id);
        const result = this.parseObjDto(singleBudget);
        return Promise.resolve(result);
    }

    newBudgetData(budgetDto: iBudgetDto): Promise<iBudgetDto> {
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
            createdAt: new Date(),
            updatedAt: new Date(),
            bankAccount: budgetDto.bankAccount
        } as iBudgetDto;
        this.BudgetData.push(result);
        return Promise.resolve(result);
    }

    editBudgetData(budgetDto: iBudgetDto): Promise<boolean> {
        if (!budgetDto.id) {
            return Promise.reject(false);
        }
        Object.bind(this.BudgetData.find((b) => b.id === budgetDto.id), budgetDto);
        return Promise.resolve(true);
    }

    deleteBudgetData(budgetDto: iBudgetDto): Promise<boolean> {
        if (!budgetDto.id)
            return Promise.reject(false);
        const deleteBudget = this.BudgetData.splice(this.BudgetData.findIndex((b) => b.id === budgetDto.id), 1);
        if (deleteBudget)
            return Promise.resolve(true);
        return Promise.reject(false);
    }

    private parseObjArrayDto(dataDto: any): iBudgetDto[] {
        return dataDto.map((data: any) => {
            return this.parseObjDto(data);
        })
    }

    private parseObjDto(dataDto: any): iBudgetDto {
        const result = new BudgetDto(
            dataDto.name,
            dataDto.color, 
            dataDto.value, 
            dataDto.type, 
            dataDto.status, 
            dataDto.bankAccount, dataDto.id, dataDto.description, dataDto.beginAt, dataDto.expireAt, dataDto.updatedAt, dataDto.createdAt);
        return result;
    }
}

export default {
    install: (app: App, options: any) => {
        app.provide('BudgetService', BudgetService);
    }
}