export interface iBankAccount {
    id?: number;
    name?: string;
    description?: string;
}

export default class BankAccountDto implements iBankAccount {
    id?: number;
    name?: string;
    description?: string;
    constructor(options: iBankAccount) {
        Object.assign(this, options);
    }
}