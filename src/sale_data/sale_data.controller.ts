import { SaleDataDto } from './dto/sale_data.dto';
import { SaleDataService } from './sale_data.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('sale-data')
export class SaleDataController {

    constructor(private readonly saleDataService: SaleDataService) {}

}