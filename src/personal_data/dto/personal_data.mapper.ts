import { PersonalDataEntity} from "../personal_data.entity";
import { PersonalDataDto } from "./personal_data.dto";

 
 export class PersonalDataMapper {

    personalDataEntity: PersonalDataEntity;
    constructor() {}

    public mapper(personalDataDto: PersonalDataDto): PersonalDataEntity{
        
        personalDataDto.documentType?  this.personalDataEntity.documentType = personalDataDto.documentType : this.personalDataEntity.documentType =  this.personalDataEntity.documentType;
        personalDataDto.document? this.personalDataEntity.document = personalDataDto.document : this.personalDataEntity.document =  this.personalDataEntity.document;
        personalDataDto.name? this.personalDataEntity.name = personalDataDto.name : this.personalDataEntity.name =  this.personalDataEntity.name;
        personalDataDto.lastName? this.personalDataEntity.lastName = personalDataDto.lastName : this.personalDataEntity.lastName =  this.personalDataEntity.lastName;
        personalDataDto.phone? this.personalDataEntity.phone = personalDataDto.phone : this.personalDataEntity.phone =  this.personalDataEntity.phone;
        personalDataDto.dateOfBirth? this.personalDataEntity.dateOfBirth = personalDataDto.dateOfBirth : this.personalDataEntity.dateOfBirth =  this.personalDataEntity.dateOfBirth;
        personalDataDto.gender? this.personalDataEntity.gender = personalDataDto.gender : this.personalDataEntity.gender =  this.personalDataEntity.gender;
        personalDataDto.email? this.personalDataEntity.email = personalDataDto.email : this.personalDataEntity.email =  this.personalDataEntity.email;
        personalDataDto.direction? this.personalDataEntity.direction = personalDataDto.direction : this.personalDataEntity.direction =  this.personalDataEntity.direction;
        personalDataDto.city? this.personalDataEntity.city = personalDataDto.city  : this.personalDataEntity.city =  this.personalDataEntity.city;
        personalDataDto.civilStatus? this.personalDataEntity.civilStatus = personalDataDto.civilStatus  : this.personalDataEntity.civilStatus =  this.personalDataEntity.civilStatus;
        personalDataDto.ocupation? this.personalDataEntity.ocupation = personalDataDto.ocupation  : this.personalDataEntity.ocupation =  this.personalDataEntity.ocupation;
        personalDataDto.eps? this.personalDataEntity.eps = personalDataDto.eps  : this.personalDataEntity.eps =  this.personalDataEntity.eps;
        personalDataDto.companionName? this.personalDataEntity.companionName = personalDataDto.companionName  : this.personalDataEntity.companionName =  this.personalDataEntity.companionName;
        personalDataDto.companionDocument? this.personalDataEntity.companionDocument = personalDataDto.companionDocument  : this.personalDataEntity.companionDocument =  this.personalDataEntity.companionDocument;
        personalDataDto.companionRelation? this.personalDataEntity.companionRelation = personalDataDto.companionRelation : this.personalDataEntity.companionRelation =  this.personalDataEntity.companionRelation;

        return this.personalDataEntity
    }

 }