import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllUsers(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  async getUserById(id: number): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id: id } });
  }

  async createUser(data: User): Promise<User> {
    return this.prismaService.user.create({ data: data });
  }

  async updateUser(id: number, data: User): Promise<User> {
    return this.prismaService.user.update({
      where: { id: Number(id) },
      data: data,
    });
  }

  async deleteUser(id: number): Promise<User> {
    return this.prismaService.user.delete({ where: { id: Number(id) } });
  }
}
