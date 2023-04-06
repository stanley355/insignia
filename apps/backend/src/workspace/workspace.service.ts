import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Workspace, Prisma } from '@prisma/client';

@Injectable()
export class WorkspaceService {
  constructor(private prisma: PrismaService) {}

  async createWorkspace(data: Prisma.WorkspaceCreateInput): Promise<Workspace> {
    return this.prisma.workspace.create({ data });
  }

  async updateWorkspace(
    id: string,
    data: Prisma.WorkspaceUpdateInput
  ): Promise<Workspace> {
    return this.prisma.workspace.update({
      where: { id },
      data,
    });
  }

  async deleteWorkspace(id: string): Promise<Workspace> {
    return this.prisma.workspace.delete({
      where: { id },
    });
  }

  async getWorkspaceById(id: string): Promise<Workspace | null> {
    return this.prisma.workspace.findUnique({
      where: { id },
    });
  }

  async getAllWorkspaces(): Promise<Workspace[]> {
    return this.prisma.workspace.findMany();
  }
}
