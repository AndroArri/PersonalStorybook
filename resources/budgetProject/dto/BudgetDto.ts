import { eBudgetStatus } from "../enum/budget/BudgetEnum";
import { eInputNumberType } from "../enum/components/InputNumberEnum";
import { iBankAccount } from "../dto/BankAccountDto";

export interface iBudgetDto {
  id: number | undefined,
  name: string;
  color: string;
  value: number;
  type: eInputNumberType;
  status: eBudgetStatus;
  description: string | undefined;
  bankAccount: iBankAccount | undefined;
  beginAt: Date | undefined;
  expireAt: Date | undefined;
  updatedAt: Date | undefined;
  createdAt: Date | undefined;
}

export default class BudgetDto implements iBudgetDto {
  constructor(
    public name: string,
    public color: string,
    public value: number,
    public type: eInputNumberType,
    public status: eBudgetStatus,
    public bankAccount: iBankAccount | undefined,
    public id: number | undefined,
    public description: string | undefined,
    public beginAt: Date | undefined,
    public expireAt: Date | undefined,
    public updatedAt: Date | undefined,
    public createdAt: Date | undefined
  ) { }
}