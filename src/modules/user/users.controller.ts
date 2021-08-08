import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Req() request: Request): any[] {
    return [{ id: 1, name: 'Harry Potter' }];
  }
}
