// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database.module';
import { GpsDataModule } from './gps-data/gps-data.module';
import { GatewayModule } from './gateway/gateway.module';

@Module({
  imports: [DatabaseModule, UserModule, GpsDataModule, GatewayModule],
})
export class AppModule {}
