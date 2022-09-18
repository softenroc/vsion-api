import { SaleDataService } from './../sale_data.service';
import { SaleDataEntity} from "../sale_data.entity";
import { SaleDataDto } from "./sale_data.dto";

 
 export class SalelDataMapper {

    saleDataEntity: SaleDataEntity;
    constructor() {}

    public mapper(saleDataDto: SaleDataDto): SaleDataEntity{
        
      saleDataDto.document? this.saleDataEntity.document = saleDataDto.document : this.saleDataEntity.document = this.saleDataEntity.document;
      saleDataDto.document? this.saleDataEntity.date_invoice = saleDataDto.date_invoice : this.saleDataEntity.date_invoice = this.saleDataEntity.date_invoice;
      saleDataDto.document? this.saleDataEntity.invoice_id = saleDataDto.document : this.saleDataEntity.document = this.saleDataEntity.document;
      saleDataDto.document? this.saleDataEntity.mount = saleDataDto.mount : this.saleDataEntity.mount = this.saleDataEntity.mount;
      saleDataDto.document? this.saleDataEntity.tax = saleDataDto.tax : this.saleDataEntity.tax = this.saleDataEntity.tax;
      saleDataDto.document? this.saleDataEntity.lens = saleDataDto.lens : this.saleDataEntity.lens = this.saleDataEntity.lens;
      saleDataDto.document? this.saleDataEntity.balance = saleDataDto.balance : this.saleDataEntity.balance = this.saleDataEntity.balance;
      saleDataDto.document? this.saleDataEntity.payment_method = saleDataDto.payment_method : this.saleDataEntity.payment_method = this.saleDataEntity.payment_method;
      saleDataDto.document? this.saleDataEntity.status = saleDataDto.status : this.saleDataEntity.status = this.saleDataEntity.status;
      
      return this.saleDataEntity
  }

 }