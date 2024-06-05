export default class budgetService {
    getBudgetData(): Promise<string> {
        const budgetData = require("/resources/budgetProject/data");
        return Promise.resolve(JSON.stringify(budgetData));
    }

    saveBudgetData()
}