import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '../auth.guard';
import bcrypt from 'bcrypt';

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
    const user = await this.userService.createUser(data);

    return { user };
  }

  @UseGuards(AuthGuard)
  @Post('auth')
  async authUser(@Body() data) {
    const user = await this.userService.getUserById(data.id);

    if (!user) {
      throw new NotFoundException('User Not Found');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return { user, apiToken: user.apiToken };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
  }
}
