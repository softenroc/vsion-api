import { Module } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { PersonalDataController } from './personal_data.controller';

@Module({
  providers: [PersonalDataService],
  controllers: [PersonalDataController]
})
export class PersonalDataModule {}
