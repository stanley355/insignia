import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {}

  async getAllUsers() {
    const users = await this.prisma.user.findMany();

    return users;
  }

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async createUser(data: any) {
    const user = await this.prisma.user.create({ data });

    return user;
  }

  async updateUser(id: string, data: any) {
    const user = await this.prisma.user.update({
      where: { id },
      data,
    });

    return user;
  }

  async deleteUser(id: string) {
    await this.prisma.user.delete({
      where: { id },
    });
  }
}
