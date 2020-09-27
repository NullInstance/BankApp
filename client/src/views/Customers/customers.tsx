import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from "@reach/router";
import { CustomerType } from '../../types/customer/customer'


const Customers = (props: RouteComponentProps) => {
    const [customers, setCustomers] = useState<CustomerType[]>([])

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
          const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/customer`);
          const json = await response.json();
          setCustomers(json)    
        }
        fetchData();    
      }, []);

    return (
        <div className="customer-base">
            <div>Customer List</div>
            {customers &&
            <ul>
                {customers.map((customer) => (
                <li><a href={"/Customers/" + customer.id}>{customer.id} {customer.name}</a> </li>
                ))}
            </ul>
            }
        </div>
    );
}

export default Customers;