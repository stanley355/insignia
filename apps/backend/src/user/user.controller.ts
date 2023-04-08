import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.getAllUsers();

    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    const user = await this.userService.getUserById(id);

    return user;
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: any) {
    const user = await this.userService.updateUser(id, data);

    return user;
  }

  @Post()
  async createUser(@Body() data: any) {
    const user = await this.userService.createUser(JSON.parse(data.body));

    return { user };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
  }
}
