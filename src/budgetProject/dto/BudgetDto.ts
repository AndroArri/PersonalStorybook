import { eBudgetStatus } from "../enum/budget/BudgetEnum";
import { eInputNumberType } from "../enum/components/InputNumberEnum";
import { iBankAccount } from "../dto/BankAccountDto";

export interface iBudgetDto {
  id: number,
  name: string;
  color: string;
  value: number;
  type: eInputNumberType;
  icon: string;
  status: eBudgetStatus;
  description: string | null;
  bankAccount: iBankAccount;
  beginAt: Date | null;
  expireAt: Date | null;
  updated_at: Date | null;
  created_at: Date | null;
}

export default class BudgetDto implements iBudgetDto {
  constructor(
    public name: string,
    public color: string,
    public value: number,
    public type: eInputNumberType,
    public status: eBudgetStatus,
    public bankAccount: iBankAccount,
    public icon: string,
    public id: number,
    public description: string | null,
    public beginAt: Date | null,
    public expireAt: Date | null,
    public updated_at: Date | null,
    public created_at: Date | null
  ) { }
}