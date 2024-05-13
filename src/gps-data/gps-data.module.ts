// src/gps-data/gps-data.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GpsData } from './gps-data.entity';
import { GpsDataService } from './gps-data.service';
import { GpsDataController } from './gps-data.controller';
import { GpsDataGateway } from './gps-data.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([GpsData])],
  providers: [GpsDataService, GpsDataGateway],
  controllers: [GpsDataController],
})
export class GpsDataModule {}
