import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SaleDataController } from './sale_data.controller';
import { SaleDataService } from './sale_data.service';
import { SaleDataEntity } from './sale_data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SaleDataEntity])],
  providers: [SaleDataService],
  controllers: [SaleDataController]
})
export class SaleDataModule { }
