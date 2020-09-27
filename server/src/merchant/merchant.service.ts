import { Injectable, HttpException } from '@nestjs/common';
import { Transaction, Merchant } from './merchant.class'
import * as mockMerchantList from '../data/mockMerchants.json'

@Injectable()
export class MerchantService {

    merchants: Array<Merchant>

    /**
     * Build merchant list from the provided json
     */
    constructor() {
        this.merchants = mockMerchantList.map(merchantInformation => 
            new Merchant(
                merchantInformation.id,
                merchantInformation.name,
                merchantInformation.isTrading,
                merchantInformation.currency,
                merchantInformation.transactions.map(transaction => new Transaction(
                    transaction.id,
                    transaction.amount,
                    transaction.description,
                    transaction.ccLastFour,
                    transaction.ccExpiry,
                    transaction.ccToken,
                    transaction.customerId,
                    transaction.date
                ))
            )
        );
    }

    /**
     * Get all merchants stored
     */
    getMerchants(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.merchants);
        });
    }

    /**
     * Get a merchant specified by its merchant ID
     * @param merchantID 
     */
    getMerchant(merchantID): Promise<any> {
        return new Promise(resolve => {
            const merchant = this.merchants.find(merchant => merchant.id === merchantID);
            if (!merchant) {
                throw new HttpException('Merchant does not exist!', 404);
            }
            resolve(merchant);
        });
    }
}
