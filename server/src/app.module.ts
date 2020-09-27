import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './merchant/merchant.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [MerchantModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
