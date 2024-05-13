// src/gps-data/gps-data.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { GpsDataService } from './gps-data.service';
import { GpsData } from './gps-data.entity';

@Controller('gps-data')
export class GpsDataController {
  constructor(private readonly gpsDataService: GpsDataService) {}

  @Post()
  async create(@Body() gpsData: Partial<GpsData>): Promise<GpsData> {
    return this.gpsDataService.create(gpsData);
  }

  @Get()
  async findAll(): Promise<GpsData[]> {
    return this.gpsDataService.findAll();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.gpsDataService.remove(+id);
  }
}
