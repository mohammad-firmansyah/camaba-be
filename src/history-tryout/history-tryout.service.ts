import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateHistoryTryoutDto } from './dto/create-history-tryout.dto';
import { UpdateHistoryTryoutDto } from './dto/update-history-tryout.dto';
import { PrismaService } from 'src/prisma.service';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class HistoryTryoutService {
  constructor(private prismaService: PrismaService) {}

  async create(createHistoryTryoutDto: CreateHistoryTryoutDto) {
    const result = await this.prismaService.historyTryout.create({
      data: {
        id: uuidv7(),
        ...createHistoryTryoutDto,
      },
    });

    if (!result) {
      return new InternalServerErrorException({
        is_error: true,
        message: 'Failed to create historyTryout',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'HistoryTryout created successfully',
      data: result,
    };
  }

  async findAll() {
    const result = await this.prismaService.historyTryout.findMany();
    return {
      is_error: false,
      message: 'HistoryTryouts fetched successfully',
      data: result,
    };
  }

  async findOne(id: string) {
    const result = await this.prismaService.historyTryout.findUnique({
      where: {
        id: id,
      },
    });

    if (!result) {
      return new NotFoundException({
        is_error: true,
        message: 'HistoryTryout not found',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'HistoryTryout fetched successfully',
      data: result,
    };
  }

  update(id: string, updateHistoryTryoutDto: UpdateHistoryTryoutDto) {
    const result = this.prismaService.historyTryout.update({
      where: {
        id: id,
      },
      data: updateHistoryTryoutDto,
    });

    if (!result) {
      return new NotFoundException({
        is_error: true,
        message: 'HistoryTryout not found',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'HistoryTryout updated successfully',
      data: result,
    };
  }

  remove(id: string) {
    const result = this.prismaService.historyTryout.delete({
      where: {
        id: id,
      },
    });

    if (!result) {
      return new NotFoundException({
        is_error: true,
        message: 'HistoryTryout not found',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'HistoryTryout deleted successfully',
      data: result,
    };
  }
}
