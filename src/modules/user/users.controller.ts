import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UsersService } from './users.service';
import { User } from './users.schema';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {
  }


  @Get()
  findAll(@Req() request: Request): any[] {
    return [{ id: 1, name: 'Harry Potter' }];
  }

  @Post()
  async create(): Promise<any> {
    const obj = await this.usersService.create({
      name: 'Lily Aldrin',
      email: 'lily@gmail.com',
      age: 28,
    });
    console.log(obj);
    return obj;
  }
}
