// src/user/user.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { users } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
