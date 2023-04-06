import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

@Injectable()
export class UserService {


  async getAllUsers() {
    const prisma = new PrismaClient();
    const users = await prisma.user.findMany();

    return users;
  }

  async getUserById(id: string) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  }

  async createUser(data: any) {
    const prisma = new PrismaClient();
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        emailVerified: new Date(),
        name: data.name,
        password: hashedPassword,
        apiToken: uuidv4(), // generate a new uuidv4 as api token
      },
    });

    return user;
  }

  async updateUser(id: string, data: any) {
    const prisma = new PrismaClient();
    const user = await prisma.user.update({
      where: { id },
      data,
    });

    return user;
  }

  async deleteUser(id: string) {
    const prisma = new PrismaClient();
    await prisma.user.delete({
      where: { id },
    });
  }
}
