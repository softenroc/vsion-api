import { PersonalDataEntity } from './personal_data.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PersonalDataEntity)
export class PersonalDataRepository extends Repository<PersonalDataEntity> {}