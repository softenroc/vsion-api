import { PersonalDataRepository } from './personal_data.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalDataEntity } from './personal_data.entity';

@Injectable()
export class PersonalDataService {

    constructor(
        @InjectRepository(PersonalDataRepository) 
        private personalDataRepository: PersonalDataRepository
        ) { }

    async getAll(): Promise<PersonalDataEntity[]>{
        const list = await this.personalDataRepository.find();
        if(!list.length){
            throw new NotFoundException({ message: 'la lista está vacía'});
        }
        return list;
    }
}
