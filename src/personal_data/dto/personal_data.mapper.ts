import { PersonalDataEntity} from "../personal_data.entity";
import { PersonalDataDto } from "./personal_data.dto";

 
 export class PersonalDataMapper {

    personalDataEntity: PersonalDataEntity;
    constructor() {}

    public mapper(personalDataDto: PersonalDataDto): PersonalDataEntity{
        
        personalDataDto.documentType?  this.personalDataEntity.documentType = personalDataDto.documentType = personalDataDto.documentType : this.personalDataEntity.documentType =  this.personalDataEntity.documentType;
        personalDataDto.document? this.personalDataEntity.document = personalDataDto.document = personalDataDto.document : this.personalDataEntity.document =  this.personalDataEntity.document;
        personalDataDto.name? this.personalDataEntity.name = personalDataDto.name = personalDataDto.name : this.personalDataEntity.name =  this.personalDataEntity.name;
        personalDataDto.lastName? this.personalDataEntity.lastName = personalDataDto.lastName = personalDataDto.lastName : this.personalDataEntity.lastName =  this.personalDataEntity.lastName;
        personalDataDto.phone? this.personalDataEntity.phone = personalDataDto.phone = personalDataDto.phone : this.personalDataEntity.phone =  this.personalDataEntity.phone;
        personalDataDto.dateOfBirth? this.personalDataEntity.dateOfBirth = personalDataDto.dateOfBirth = personalDataDto.dateOfBirth : this.personalDataEntity.dateOfBirth =  this.personalDataEntity.dateOfBirth;
        personalDataDto.gender? this.personalDataEntity.gender = personalDataDto.gender = personalDataDto.gender : this.personalDataEntity.gender =  this.personalDataEntity.gender;
        personalDataDto.email? this.personalDataEntity.email = personalDataDto.email = personalDataDto.email : this.personalDataEntity.email =  this.personalDataEntity.email;
        personalDataDto.direction? this.personalDataEntity.direction = personalDataDto.direction = personalDataDto.direction : this.personalDataEntity.direction =  this.personalDataEntity.direction;
        personalDataDto.city? this.personalDataEntity.city = personalDataDto.city = personalDataDto.city : this.personalDataEntity.city =  this.personalDataEntity.city;
        personalDataDto.civilStatus? this.personalDataEntity.civilStatus = personalDataDto.civilStatus = personalDataDto.civilStatus : this.personalDataEntity.civilStatus =  this.personalDataEntity.civilStatus;
        personalDataDto.ocupation? this.personalDataEntity.ocupation = personalDataDto.ocupation = personalDataDto.ocupation : this.personalDataEntity.ocupation =  this.personalDataEntity.ocupation;
        personalDataDto.eps? this.personalDataEntity.eps = personalDataDto.eps = personalDataDto.eps : this.personalDataEntity.eps =  this.personalDataEntity.eps;
        personalDataDto.companionName? this.personalDataEntity.companionName = personalDataDto.companionName = personalDataDto.companionName : this.personalDataEntity.companionName =  this.personalDataEntity.companionName;
        personalDataDto.companionDocument? this.personalDataEntity.companionDocument = personalDataDto.companionDocument = personalDataDto.companionDocument : this.personalDataEntity.companionDocument =  this.personalDataEntity.companionDocument;
        personalDataDto.companionRelation? this.personalDataEntity.companionRelation = personalDataDto.companionRelation = personalDataDto.companionRelation : this.personalDataEntity.companionRelation =  this.personalDataEntity.companionRelation;

        return this.personalDataEntity
    }

 }