// src/user/user.controller.ts

import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { users } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<users[]> {
    return this.userService.findAll();
  }

  @Post()
  async create(@Body() userData: Partial<users>): Promise<users> {
    return this.userService.create(userData);
  }
}
