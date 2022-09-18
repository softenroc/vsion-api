import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'sale_data'})
export class SaleDataEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'document', type:'varchar', length:20, nullable:false, unique: true})
    document: string;
    
    @Column({name:'date_invoice', type:'date', nullable:true})
    date_invoice: Date;
    
    @Column({name:'invoice_id', type:'varchar', length:20, nullable:true})
    invoice_id: string;
    
    @Column({name:'mount', type:'numeric', nullable:true})
    mount: number;
    
    @Column({name:'tax', type:'numeric', nullable:true})
    tax: number;
    
    @Column({name:'lens', type:'numeric', nullable:true})
    lens: number;
    
    @Column({name:'balance', type:'numeric', nullable:true})
    balance: number;   
    
    @Column({name:'payment_method', type:'varchar', length:20, nullable:true})
    payment_method: string;

    @Column({name:'status', type:'varchar', length:50, nullable:false})
    status: string;

}