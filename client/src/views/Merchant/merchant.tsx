import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import { MerchantType } from '../../types/merchant/merchant'
import TransactionGrid from '../../components/TransactionGrid/transactionGrid'


interface MerchantProps extends RouteComponentProps {
    merchantId?: string;
}

const Merchant = ({ merchantId }: MerchantProps) => {
    const [merchant, setMerchant] = useState<MerchantType | null>(null)

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
          const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merchant/${merchantId}`);
          const json = await response.json();
          console.log(json)
          setMerchant(json)    
        }
        fetchData();    
      }, [merchantId]);

    return (
        <div className="merchant-base">
            {merchant &&
            <div className="merchant-information">
                <div>Merchant : {merchant.name}</div>
                <div>Merchant ID : {merchant.id}</div>
                <div>Is Trading : {String(merchant.isTrading)}</div>
                <div>Trading in : {merchant.currency}</div>
                <div>
                    <h3>Transactions</h3>
                </div>
                {merchant.transactions &&
                    <TransactionGrid transactions={merchant?.transactions} />
                }
            </div>
            }
        </div>
    );
}

export default Merchant;