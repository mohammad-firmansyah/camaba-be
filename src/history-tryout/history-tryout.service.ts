import { Injectable } from '@nestjs/common';
import { CreateHistoryTryoutDto } from './dto/create-history-tryout.dto';
import { UpdateHistoryTryoutDto } from './dto/update-history-tryout.dto';

@Injectable()
export class HistoryTryoutService {
  create(createHistoryTryoutDto: CreateHistoryTryoutDto) {
    return 'This action adds a new historyTryout';
  }

  findAll() {
    return `This action returns all historyTryout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} historyTryout`;
  }

  update(id: number, updateHistoryTryoutDto: UpdateHistoryTryoutDto) {
    return `This action updates a #${id} historyTryout`;
  }

  remove(id: number) {
    return `This action removes a #${id} historyTryout`;
  }
}
