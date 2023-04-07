import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContactService {
  async create(data): Promise<any> {
    const prisma: any = new PrismaClient();
    return await prisma.contact.create({ data });
  }

  async findAll(): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contact.findMany();
  }

  async findOne(id: number): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contact.findUnique({ where: { id } });
  }

  async update(id: number, data): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contact.update({ where: { id }, data });
  }

  async remove(id: number): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contact.delete({ where: { id } });
  }
}
