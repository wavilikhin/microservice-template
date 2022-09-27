import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers() {
    return JSON.stringify({ users: [1] });
  }
}
