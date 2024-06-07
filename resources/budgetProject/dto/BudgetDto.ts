import { eBudgetStatus } from "../enum/budget/BudgetEnum";
import { eInputNumberType } from "../enum/components/InputNumberEnum";

interface iBudgetDto {
    id?: number,
    name?: string;
    color?: string;
    value?: number;
    type?: eInputNumberType;
    description?: string;
    status?: eBudgetStatus;
    beginAt?: Date;
    expireAt?: Date;
  }

export default class BudgetDto implements iBudgetDto {
    id?: number;
    name?: string;
    color?: string;
    value?: number;
    type?: eInputNumberType;
    description?: string;
    status?: eBudgetStatus;
    beginAt?: Date | undefined;
    expireAt?: Date | undefined;

  constructor(options: Partial<iBudgetDto>) {
    Object.assign(this, options);
  }
} 