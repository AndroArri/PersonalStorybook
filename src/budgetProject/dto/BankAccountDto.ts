export interface iBankAccount {
    id: number;
    name: string;
    description: string;
}

export default class BankAccountDto implements iBankAccount {
    constructor(
        public id: number,
        public name: string,
        public description: string) { }
}