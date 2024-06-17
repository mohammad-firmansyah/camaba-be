import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateTryoutDto } from './dto/create-tryout.dto';
import { UpdateTryoutDto } from './dto/update-tryout.dto';
import { PrismaService } from 'src/prisma.service';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class TryoutService {
  constructor(private prismaService: PrismaService) {}

  async create(createTryoutDto: CreateTryoutDto) {
    const result = await this.prismaService.tryout.create({
      data: {
        id: uuidv7(),
        ...createTryoutDto,
      },
    });

    if (!result) {
      return new InternalServerErrorException({
        is_error: true,
        message: 'Failed to create tryout',
        data: {},
      });
    }
    return {
      is_error: false,
      message: 'Tryout created successfully',
      data: result,
    };
  }

  findAll() {
    const result = this.prismaService.tryout.findMany();

    return {
      is_error: false,
      message: 'All Tryout data',
      data: result,
    };
  }

  async findOne(id: string) {
    const result = await this.prismaService.tryout.findUnique({
      where: {
        id: id,
      },
    });

    if (!result) {
      return new NotFoundException({
        is_error: true,
        message: 'Tryout not found',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'Tryout data',
      data: result,
    };
  }

  async update(id: string, updateTryoutDto: UpdateTryoutDto) {
    const result = await this.prismaService.tryout.update({
      where: {
        id: id,
      },
      data: updateTryoutDto,
    });

    if (!result) {
      return new NotFoundException({
        is_error: true,
        message: 'Tryout not found',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'Tryout updated successfully',
      data: result,
    };
  }

  remove(id: string) {
    const result = this.prismaService.tryout.delete({
      where: {
        id: id,
      },
    });

    return {
      is_error: false,
      message: 'Tryout deleted successfully',
      data: result,
    };
  }
}
