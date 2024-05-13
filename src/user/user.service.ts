// src/user/user.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users)
    private readonly userRepository: Repository<users>,
  ) {}

  async findAll(): Promise<users[]> {
    return this.userRepository.find();
  }

  async create(userData: Partial<users>): Promise<users> {
    return this.userRepository.save(userData);
  }
}
