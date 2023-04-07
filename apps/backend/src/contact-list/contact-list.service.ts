import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContactListService {
  async create(data): Promise<any> {
    const prisma: any = new PrismaClient();
    return await prisma.contactList.create({ data });
  }

  async findAll(): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactList.findMany();
  }

  async findOne(id: number): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactList.findUnique({ where: { id } });
  }

  async update(id: number, data): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactList.update({ where: { id }, data });
  }

  async remove(id: number): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactList.delete({ where: { id } });
  }
}
