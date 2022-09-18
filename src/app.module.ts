import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from './config/constants';
import { PersonalDataModule } from './personal_data/personal_data.module';
import { SaleDataModule } from './sale_data/sale_data.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get<string>(DB_HOST),
      port: +configService.get<string>(DB_PORT),
      username: configService.get<string>(DB_USER),
      password: configService.get<string>(DB_PASSWORD),
      database: configService.get<string>(DB_DATABASE),
      entities: [ __dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true
    }),
    inject: [ConfigService],
  }),
  PersonalDataModule, SaleDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
