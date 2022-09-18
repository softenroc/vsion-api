import { SaleDataDto } from './dto/sale_data.dto';
import { SaleDataService } from './sale_data.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('sale-data')
export class SaleDataController {

    constructor(private readonly saleDataService: SaleDataService) {}    

    @Get()
    async getAll(){
        console.log(`getAll sale-data`);
        return await this.saleDataService.getAll();
    }

    @Get('by_document/:document')
    async getOneByDocyment(@Param('document') document: string){

        return this.saleDataService.findByDocument(document);
    }

    @Get('by_invoice/:invoice_id')
    async getOneByInvoiceId(@Param('invoice_id') invoice_id: string){

        return this.saleDataService.findByInvoice(invoice_id);
    }

    @UsePipes(new ValidationPipe())
    @Post()
    async create(@Body() dto: SaleDataDto){
        return this.saleDataService.create(dto);
    }

    @Put()
    async update(@Param('invoice_id') invoice_id: string, @Body() dto: SaleDataDto){
        return this.saleDataService.update(invoice_id, dto);
    }

    @Delete(':invoice_id')
    async delete(@Param('invoice_id') invoice_id: string){
        return this.saleDataService.delete(invoice_id);
    }

}