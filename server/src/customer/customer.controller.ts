import { Controller, Get, Param, Post, Body, Query, Delete } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDTO } from './customer.dto'

@Controller('customer')
export class CustomerController {
    constructor(private customerService: CustomerService) { }

    @Get()
    async getBooks() {
        const customers = await this.customerService.getCustomers();
        return customers;
    }

    @Get(':customerID')
    async getBook(@Param('customerID') customerID) {
        const customer = await this.customerService.getCustomer(customerID);
        return customer;
    }

    @Post()
    async addBook(@Body() createCustomerDTO: CreateCustomerDTO) {
        const customers = await this.customerService.createCustomer(createCustomerDTO);
        return customers;
    }

    @Delete()
    async deleteBook(@Query() query) {
        const customers = await this.customerService.deleteCustomer(query.customerID);
        return customers;
    }
}
