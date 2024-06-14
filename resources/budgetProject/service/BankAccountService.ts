import BankAccountDto, { iBankAccount } from "../dto/BankAccountDto";
import BankAccountData from "resources/budgetProject/data/BankAccount.json";
import * as fs from "fs";

export default class BankAccountService {
    private static PATH_DATA_BANK_ACCOUNT = '../data/BankAccount.json';
    static getBankAccountData(): Promise<iBankAccount[]> {
        return Promise.resolve(this.parseObjArrayDto(BankAccountData));
    }

    static getSingleBankAccount(id: number): Promise<iBankAccount> {
        const singleBankAccount = BankAccountData.find((b) => b.id === id);
        const result = this.parseObjDto(singleBankAccount);
        return Promise.resolve(result);
    }

    static newBankAccountData(bankAccountDto: iBankAccount): Promise<boolean> {
        BankAccountData.push({
            id: Math.random() * 100,
            name: bankAccountDto.name ?? "",
            description: bankAccountDto.description ?? "",
        });
        return Promise.resolve(true);
    }

    static editBankAccountData(bankAccountDto: iBankAccount): Promise<boolean> {
        if (!bankAccountDto.id) {
            return Promise.reject(false);
        }
        Object.bind(BankAccountData.find((b) => b.id === bankAccountDto.id), bankAccountDto);
        return Promise.resolve(true);
    }

    static deleteBankAccount(bankAccountDto: iBankAccount): Promise<boolean> {
        if (!bankAccountDto.id)
            return Promise.reject(false);
        const deleteAccount = BankAccountData.splice(BankAccountData.findIndex((b) => b.id === bankAccountDto.id), 1);
        if (deleteAccount)
            return Promise.resolve(true);
        return Promise.reject(false);
    }

    private static parseObjArrayDto(dataDto: any): iBankAccount[] {
        return dataDto.map((data: any) => {
            return this.parseObjDto(data);
        })
    }

    private static parseObjDto(dataDto: any): iBankAccount {
        const result = new BankAccountDto({
            id: dataDto.id,
            name: dataDto.name,
            description: dataDto.description,
        });
        return result;
    }
}