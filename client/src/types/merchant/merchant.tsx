export interface Transaction {
    id?: string;
    amount?: number;
    description?: string;
    ccLastFour?: string;
    ccExpiry?: string;
    ccToken?: string;
    customerId?: string;
    date?: string;
}


export interface MerchantType {
    id?: string;
    name?: string;
    isTrading?: boolean;
    currency?: string;
    transactions?: Transaction[];
}