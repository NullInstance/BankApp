import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import { CustomerType } from '../../types/customer/customer'
import { MerchantType } from '../../types/merchant/merchant'


interface CustomerProps extends RouteComponentProps {
    customerId?: string;
  }

const Customer = ({ customerId }: CustomerProps) => {
    const [customer, setCustomer] = useState<CustomerType | null>(null)
    const [merchant, setMerchant] = useState<MerchantType | null>(null)

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
          const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/customer/${customerId}`);
          const json = await response.json();
          setCustomer(json)

          const responseMerchant = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merchant/${json.merchantId}`);
          const jsonMerchant = await responseMerchant.json();
          setMerchant(jsonMerchant)
        }
        fetchData();    
      }, [customerId]);

    return (
        <div className="customer-base">
            {customer &&
            <div className="customer-information">
                <div>Customer {customer.name}</div>
                <div>Customer ID {customer.id}</div>
                <div>Merchant ID {customer.merchantId}</div>
            </div>
            }
            {merchant &&
            <div className="merchant-information">
                <div><a href={"/Merchants/" + merchant.id}>Merchant {merchant.name}</a></div>
                <div>
                    <h3>Related Transactions</h3>
                    <ul>
                    {customer && merchant.transactions &&
                        merchant.transactions.map((transaction) => {
                            if (transaction.customerId === customer.id) { 
                            return <li>{transaction.description} : {transaction.amount}</li>
                            } else {
                                return
                            }
                        })
                    }
                    </ul>
                </div>
            </div>
            }
        </div>
    );
}

export default Customer;