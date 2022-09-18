import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'sale_data'})
export class SaleDataEntity {

    @PrimaryGeneratedColumn()
    id: number;

}