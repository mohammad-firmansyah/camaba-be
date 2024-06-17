import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from 'src/prisma.service';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class QuestionService {

  constructor(private prismaService: PrismaService) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const result = await this.prismaService.question.create({
      data: {
        id: uuidv7(),
        ...createQuestionDto
      },
    });

    if (!result) {
      return new InternalServerErrorException({
        is_error: true,
        message: 'Failed to create question',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'Question created successfully',
      data: result,
    }
  }

  async findAll() {
    const result = await this.prismaService.question.findMany();
    return{
      is_error: false,
      message: 'Questions fetched successfully',
      data: result,
    }
  }

  findOne(id: string) {
    const result = this.prismaService.question.findUnique({
      where: {
        id: id,
      }
    });

    if (!result) {
      return new NotFoundException({
        is_error: true,
        message: 'Question not found',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'Question fetched successfully',
      data: result,
    }
  }

  update(id: string, updateQuestionDto: UpdateQuestionDto) {
    const result = this.prismaService.question.update({
      where: {
        id: id,
      },
      data: updateQuestionDto,
    });

    if (!result) {
      return new InternalServerErrorException({
        is_error: true,
        message: 'Failed to update question',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'Question updated successfully',
      data: result,
    }
  }

  remove(id: string) {
    const result = this.prismaService.question.delete({
      where: {
        id: id,
      }
    });

    if (!result) {
      return new InternalServerErrorException({
        is_error: true,
        message: 'Failed to delete question',
        data: {},
      });
    }

    return {
      is_error: false,
      message: 'Question deleted successfully',
      data: result,
    }
  }
}
