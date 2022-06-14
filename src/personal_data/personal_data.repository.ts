import { PersonalDataEntity } from './personal_data.entity';
import {  Repository } from "typeorm";

export class PersonalDataRepository extends Repository<PersonalDataEntity> {}