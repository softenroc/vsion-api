import { PersonalDataDto } from './dto/personal_data.dto';
import { PersonalDataRepository } from './personal_data.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonalDataEntity } from './personal_data.entity';
import { PersonalDataMapper } from './dto/personal_data.mapper';

@Injectable()
export class PersonalDataService {

    personalDataMapper: PersonalDataMapper;

    constructor(
        @InjectRepository(PersonalDataEntity) 
        private personalDataRepository: PersonalDataRepository
        ) { }

    async getAll(): Promise<PersonalDataEntity[]>{
        const list = await this.personalDataRepository.find();
        if(!list.length){
            throw new NotFoundException({ message: 'la lista está vacía'});
        }
        return list;
    }

    async findById(id: number): Promise<PersonalDataEntity> {
        const personalData = await this.personalDataRepository.findOneBy({id: id});
        if(!personalData){
            throw new NotFoundException({message: 'no existe el paciente'});
        }

        return personalData;
    }

    async findByDocument(document: string): Promise<PersonalDataEntity> {
        const personalData = await this.personalDataRepository.findOneBy({document: document});
        if(!personalData){
            throw new NotFoundException({message: 'no existe el paciente'});
        }

        return personalData;
    }

    async create(dto: PersonalDataDto): Promise<any> {
        const personalData = this.personalDataRepository.create(dto);
        await this.personalDataRepository.save(personalData);
        return {message: `paciente ${personalData.name} registrado correctamente`};
    }

    
    async update(document: string, dto: PersonalDataDto): Promise<any> {
        let personalData = await this.personalDataRepository.findOneBy({document: document});
        personalData =  this.personalDataMapper.mapper(dto);
        await this.personalDataRepository.save(personalData);
        return {message: 'informacion del paciente actualizada correctamente'};
    }

    async delete(document: string): Promise<any> {
        const personalData = await this.personalDataRepository.findOneBy({document: document});        
        await this.personalDataRepository.delete(personalData);
        return {message: `paciente  ${personalData.name} eliminado`};
    }
}
