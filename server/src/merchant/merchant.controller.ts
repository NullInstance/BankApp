import { Controller, Get, Param } from '@nestjs/common';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {
    constructor(private merchantService: MerchantService) { }

    @Get()
    async getMerchants() {
        const books = await this.merchantService.getMerchants();
        return books;
    }

    @Get(':merchantID')
    async getMerchant(@Param('merchantID') merchantID) {
        const book = await this.merchantService.getMerchant(merchantID);
        return book;
    }
}
