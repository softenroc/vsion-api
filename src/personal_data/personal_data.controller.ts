import { PersonalDataDto } from './dto/personal_data.dto';
import { PersonalDataService } from './personal_data.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('personal-data')
export class PersonalDataController {

    constructor(private readonly personalDataService: PersonalDataService) {}

    @Get()
    async getAll(){
        console.log(`getAll personal-data`);
        return await this.personalDataService.getAll();
    }

    @Get(':document')
    async getOneByDocyment(@Param('document') document: string){

        return this.personalDataService.findByDocument(document);
    }

    @UsePipes(new ValidationPipe())
    @Post()
    async create(@Body() dto: PersonalDataDto){
        return this.personalDataService.create(dto);
    }

    @Put()
    async update(@Param('document') document: string, @Body() dto: PersonalDataDto){
        return this.personalDataService.update(document, dto);
    }

    @Delete(':document')
    async delete(@Param('document') document: string){
        return this.personalDataService.delete(document);
    }

}
