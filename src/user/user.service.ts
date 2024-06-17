import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import { User, Prisma } from '@prisma/client';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findFirst({
      where: {
        email: email,
      },
    });
  }

  async createUser(
    name: string,
    pass: string,
    email: string,
  ): Promise<User | null> {
    return await this.prisma.user.create({
      data: {
        name,
        role: 'USER',
        email,
        password: pass,
      },
    });
  }
}
