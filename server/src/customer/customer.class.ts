export class Customer {
    id: string;
    merchantId: string;
    name: string;

    constructor(id: string, merchantId: string, name: string) {
        this.id = id;
        this.merchantId = merchantId;
        this.name = name;
    }

    getId(): string {
        return this.id;
    }

    getMerchantId(): string {
        return this.merchantId;
    }

    getName(): string {
        return this.name;
    }
}