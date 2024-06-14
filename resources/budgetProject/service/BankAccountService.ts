import BankAccountDto, { iBankAccount } from "../dto/BankAccountDto";
import BankAccountJson from "../data/BankAccount.json";

export default function useBankAccountService() {
    const bankAccountData = parseObjArrayDto(BankAccountJson);

    const getBankAccountData = (): Promise<iBankAccount[]> => {
        return Promise.resolve(parseObjArrayDto(bankAccountData));
    }

    const getSingleBankAccount = (id: number): Promise<iBankAccount> => {
        const singleBankAccount = bankAccountData.find((b) => b.id === id);
        const result = parseObjDto(singleBankAccount);
        return Promise.resolve(result);
    }

    const newBankAccountData = (bankAccountDto: iBankAccount): Promise<boolean> => {
        bankAccountData.push({
            id: Math.random() * 100,
            name: bankAccountDto.name ?? "",
            description: bankAccountDto.description ?? "",
        });
        return Promise.resolve(true);
    }

    const editBankAccountData = (bankAccountDto: iBankAccount): Promise<boolean> => {
        if (!bankAccountDto.id) {
            return Promise.reject(false);
        }
        Object.bind(bankAccountData.find((b) => b.id === bankAccountDto.id), bankAccountDto);
        return Promise.resolve(true);
    }

    const deleteBankAccount = (bankAccountDto: iBankAccount): Promise<boolean> => {
        if (!bankAccountDto.id)
            return Promise.reject(false);
        const deleteAccount = bankAccountData.splice(bankAccountData.findIndex((b) => b.id === bankAccountDto.id), 1);
        if (deleteAccount)
            return Promise.resolve(true);
        return Promise.reject(false);
    }

    function parseObjArrayDto(dataDto: any): iBankAccount[] {
        return dataDto.map((data: any) => {
            return parseObjDto(data);
        })
    }

    function parseObjDto(dataDto: any): iBankAccount {
        const result = new BankAccountDto(
            dataDto.id,
            dataDto.name,
            dataDto.description,
        );
        return result;
    }

    return {
        getBankAccountData,
        getSingleBankAccount,
        newBankAccountData,
        editBankAccountData,
        deleteBankAccount
    }
}

