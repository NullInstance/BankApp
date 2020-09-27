import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import { MerchantType } from '../../types/merchant/merchant'


const Merchants = (props: RouteComponentProps) => {
    const [merchants, setMerchants] = useState<MerchantType[]>([])

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
          const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/merchant`);
          const json = await response.json();
          setMerchants(json)    
        }
        fetchData();    
      }, []);

    return (
        <div className="merchant-base">
            <div>Merchant List</div>
            {merchants &&
            <ul>
                {merchants.map((merchant) => (
                <li><a href={'/Merchants/' + merchant.id}>{merchant.id} {merchant.name}</a> </li>
                ))}
            </ul>
            }
        </div>
    );
}

export default Merchants;