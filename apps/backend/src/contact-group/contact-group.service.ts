import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContactGroupService {
  async create(data): Promise<any> {
    const prisma: any = new PrismaClient();
    return await prisma.contactGroup.create({ data });
  }

  async findAll(): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactGroup.findMany();
  }

  async findOne(id: number): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactGroup.findUnique({ where: { id } });
  }

  async update(id: number, data): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactGroup.update({ where: { id }, data });
  }

  async remove(id: number): Promise<any> {
    const prisma: any = new PrismaClient();
    return prisma.contactGroup.delete({ where: { id } });
  }
}
