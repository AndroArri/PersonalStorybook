import { eBudgetStatus } from "../enum/budget/BudgetEnum";
import { eInputNumberType } from "../enum/components/InputNumberEnum";

interface iBudgetDto {
    name: string;
    color: string;
    value: number;
    type: eInputNumberType;
    description: string;
    status: eBudgetStatus;
    beginAt?: Date;
    expireAt?: Date;
  }

export default class BudgetDto implements iBudgetDto {
    name: string = "";
    color: string = "";
    value: number = 0;
    type: eInputNumberType = eInputNumberType.currency;
    description: string = "";
    status: eBudgetStatus = eBudgetStatus.Attivo;
    beginAt?: Date | undefined;
    expireAt?: Date | undefined;
} 