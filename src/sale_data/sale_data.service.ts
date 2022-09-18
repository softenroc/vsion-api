import { SaleDataRepository } from './sale_data.repository';
import { SaleDataEntity } from './sale_data.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SalelDataMapper } from './dto/sale_data.mapper';
import { SaleDataDto } from './dto/sale_data.dto';

@Injectable()
export class SaleDataService {

    saleDataMapper: SalelDataMapper;

    constructor(
        @InjectRepository(SaleDataEntity) 
        private saleDataRepository: SaleDataRepository
        ) { }

    async getAll(): Promise<SaleDataEntity[]>{
        const list = await this.saleDataRepository.find();
        if(!list.length){
            throw new NotFoundException({ message: 'la lista está vacía'});
        }
        return list;
    }

    async findById(id: number): Promise<SaleDataEntity> {
        const saleData = await this.saleDataRepository.findOneBy({id: id});
        if(!saleData){
            throw new NotFoundException({message: 'no existe la factura'});
        }

        return saleData;
    }

    async findByDocument(document: string): Promise<SaleDataEntity> {
        const saleData = await this.saleDataRepository.findOneBy({document: document});
        if(!saleData){
            throw new NotFoundException({message: 'no existe la factura'});
        }

        return saleData;
    }

    async findByInvoice(invoice_id: string): Promise<SaleDataEntity> {
        const saleData = await this.saleDataRepository.findOneBy({invoice_id: invoice_id});
        if(!saleData){
            throw new NotFoundException({message: 'no existe la factura'});
        }

        return saleData;
    }

    async create(dto: SaleDataDto): Promise<any> {
        const saleData = this.saleDataRepository.create(dto);
        await this.saleDataRepository.save(saleData);
        return dto;
    }

    
    async update(invoice_id: string, dto: SaleDataDto): Promise<any> {
        let saleData = await this.saleDataRepository.findOneBy({invoice_id: invoice_id});
        saleData =  this.saleDataMapper.mapper(dto);
        await this.saleDataRepository.save(saleData);
        return {message: 'informacion de la factura actualizada correctamente'};
    }

    async delete(invoice_id: string): Promise<any> {
        const saleData = await this.saleDataRepository.findOneBy({invoice_id: invoice_id});      
        if(!saleData) {
            throw new NotFoundException({message: 'no existe la factura'});          
        } else {
            await this.saleDataRepository.delete(saleData.id);
            return {message: `factura  ${saleData.invoice_id} eliminada`};
        }
        
    }

}
