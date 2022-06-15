import { IsNotEmpty } from "class-validator";
import { DocumentType, Gender, CivilStatus } from "../personal_data.entity";

export class PersonalDataDto {

    @IsNotEmpty()
    documentType?: DocumentType;
    @IsNotEmpty()
    document?: string;
    @IsNotEmpty()
    name?: string;
    @IsNotEmpty()
    lastName?: string;
    phone?: string;
    dateOfBirth?: Date;
    @IsNotEmpty()
    gender?: Gender;
    @IsNotEmpty()
    email?: string;
    direction?: string;
    @IsNotEmpty()
    city?: string;
    civilStatus?: CivilStatus;
    ocupation?:string;
    eps?:string;
    companionName?:string;
    companionDocument?: string;
    companionRelation?: string;

}