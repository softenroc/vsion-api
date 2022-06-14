import { DocumentType, Gender, CivilStatus } from "../personal_data.entity";

export class PersonalDataDto {

    documentType?: DocumentType;
    document?: string;
    name?: string;
    lastName?: string;
    phone?: string;
    dateOfBirth?: Date;
    gender?: Gender;
    email?: string;
    direction?: string;
    city?: string;
    civilStatus?: CivilStatus;
    ocupation?:string;
    esp?:string;
    companionName?:string;
    companionDocument?: string;
    companionRelation?: string;

}