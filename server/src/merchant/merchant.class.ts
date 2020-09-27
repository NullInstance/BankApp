export class Transaction {
    id: string;
    amount: number;
    description: string;
    ccLastFour: string;
    ccExpiry: string;
    ccToken: string;
    customerId: string;
    date: string;

    constructor(id: string, amount: number, description: string, ccLastFour: string,
        ccExpiry: string, ccToken: string, customerId: string, date: string) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.ccLastFour = ccLastFour;
        this.ccExpiry = ccExpiry;
        this.ccToken = ccToken;
        this.customerId = customerId;
        this.date = date;
    }
}

export class Merchant {
    id: string;
    name: string;
    isTrading: boolean;
    currency: string;
    transactions: Array<Transaction>;
    
    constructor(id: string, name: string, isTrading: boolean, currency: string, transactions: Array<Transaction>) {
        this.id = id;
        this.name = name;
        this.isTrading = isTrading;
        this.currency = currency;
        this.transactions = transactions;
    }

    getId(): string {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getIsTrading(): boolean {
        return this.isTrading;
    }

    setIsTrading(isTrading: boolean) {
        this.isTrading = isTrading
    }

    getCurrency(): string {
        return this.currency;
    }

    getTransactions(): Array<Transaction> {
        return this.transactions;
    }

    addTransaction(transaction: Transaction) {
        this.transactions.push(transaction)
    }
}
