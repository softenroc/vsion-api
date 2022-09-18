import { IsNotEmpty } from "class-validator";

export class SaleDataDto {

    @IsNotEmpty()
    document?: string;
    @IsNotEmpty()
    date_invoice?: Date;
    invoice_id?: string;
    mount?: number;
    tax?: number;
    lens?: number;
    balance?: number;   
    payment_method?: string;
    @IsNotEmpty()
    status?: string;
}