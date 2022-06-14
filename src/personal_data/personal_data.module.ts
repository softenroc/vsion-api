import { PersonalDataRepository } from './personal_data.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { PersonalDataController } from './personal_data.controller';
import { PersonalDataEntity } from './personal_data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalDataEntity])],
  providers: [PersonalDataService],
  controllers: [PersonalDataController]
})
export class PersonalDataModule {}
