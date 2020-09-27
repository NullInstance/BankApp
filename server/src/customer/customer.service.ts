import { Injectable, HttpException } from '@nestjs/common';
import { Customer } from './customer.class'
import { CreateCustomerDTO } from './customer.dto'
import * as mockCustomerList from '../data/mockCustomers.json'

@Injectable()
export class CustomerService {
    customers: Array<Customer>;

    /**
     * Construct a list of customers
     */
    constructor() {
        this.customers = mockCustomerList.map(customerInformation =>
            new Customer(
                customerInformation.id,
                customerInformation.merchantId,
                customerInformation.name
            )
        )
    }

    /**
     * Get all customers
     */
    getCustomers(): Promise<any> {
        return new Promise(resolve => {
            resolve(this.customers);
        });
    }

    /**
     * Get a customer specified by its customer ID
     * @param customerID 
     */
    getCustomer(customerID: string): Promise<any> {
        return new Promise(resolve => {
            const customer = this.customers.find(customer => customer.id === customerID);
            if (!customer) {
                throw new HttpException('Customer does not exist!', 404);
            }
            resolve(customer);
        });
    }

    /**
     * Add a new customer
     * @param customerInformation 
     */
    createCustomer(customerInformation: CreateCustomerDTO): Promise<any> {
        return new Promise(resolve => {
            this.customers.push(
                new Customer(
                    customerInformation.id,
                    customerInformation.merchantId,
                    customerInformation.name
                )
            )
            resolve(this.customers)
        })
    }

    /**
     * Delete customer specified by its customer id
     * @param id 
     */
    deleteCustomer(id: string): Promise<any> {
        return new Promise(resolve => {
            let index = this.customers.findIndex(customer => customer.id === id);
            if (index === -1) {
                throw new HttpException('Customer does not exist!', 404);
            }
            this.customers.splice(index, 1);
            resolve(this.customers);
        });
    }
}
