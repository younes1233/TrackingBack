// src/gps-data/gps-data.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GpsData } from './gps-data.entity';

@Injectable()
export class GpsDataService {
  constructor(
    @InjectRepository(GpsData)
    private readonly gpsDataRepository: Repository<GpsData>,
  ) {}

  async create(gpsData: Partial<GpsData>): Promise<GpsData> {
    return await this.gpsDataRepository.save(gpsData);
  }

  async findAll(): Promise<GpsData[]> {
    return await this.gpsDataRepository.find();
  }


  async remove(id: number): Promise<void> {
    await this.gpsDataRepository.delete(id);
  }
}
