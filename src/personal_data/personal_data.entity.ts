import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'personal_data'})
export class PersonalDataEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'document_type', type:'varchar', length:20, nullable:false})
    documentType : DocumentType;
    
    @Column({name:'document', type:'varchar', length:20, nullable:false, unique: true})
    document: string;
    
    @Column({name:'name', type:'varchar', length:50, nullable:false})
    name: string;
    
    @Column({name:'last_name', type:'varchar', length:50, nullable:false})
    lastName: string;
    
    @Column({name:'phone', type:'varchar', length:20, nullable:true})
    phone: string;
    
    @Column({name:'date_of_birth', type:'date', nullable:true})
    dateOfBirth: Date;
    
    @Column({name:'gender', type:'varchar', length:20, nullable:false})
    gender: Gender;
    
    @Column({name:'email', type:'varchar', length:50, nullable:false})
    email: string;
    
    @Column({name:'direction', type:'varchar', length:50, nullable:true})
    direction: string;
    
    @Column({name:'city', type:'varchar', length:50, nullable:false})
    city: string;
    
    @Column({name:'civil_status', type:'varchar', length:20, nullable:false})
    civilStatus: CivilStatus;
    
    @Column({name:'ocupation', type:'varchar', length:50, nullable:true})
    ocupation:string;
    
    @Column({name:'eps', type:'varchar', length:50, nullable:false})
    esp:string;
    
    @Column({name:'companion_name', type:'varchar', length:50, nullable:true})
    companionName:string;
    
    @Column({name:'companion_document', type:'varchar', length:20, nullable:true})
    companionDocument: string;
    
    @Column({name:'companion_relation', type:'varchar', length:20, nullable:true})
    companionRelation: string;
}

export enum CivilStatus {
    CASADO,
    SOLTERO, 
    VIUDO,
    UNION_LIBRE,
    NSNR
}
export enum Gender {
    MASCULINO,
    FEMENINO, 
    NSNR
}
export enum DocumentType {
    CEDULA,
    PASAPORTE,
    TARJETA_IDENTIDAD,
    REGISTRO_CIVIL,
    CEDULA_EXTRANJERIA
}