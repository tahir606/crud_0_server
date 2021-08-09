import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }


  @Get()
  async findAll(@Req() request: Request): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: User): Promise<any> {
    return await this.usersService.create({
      name: user.name,
      email: user.email,
      age: user.age
    });
  }
}
