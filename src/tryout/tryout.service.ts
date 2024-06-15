import { Injectable } from '@nestjs/common';
import { CreateTryoutDto } from './dto/create-tryout.dto';
import { UpdateTryoutDto } from './dto/update-tryout.dto';

@Injectable()
export class TryoutService {
  create(createTryoutDto: CreateTryoutDto) {
    return 'This action adds a new tryout';
  }

  findAll() {
    return `This action returns all tryout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tryout`;
  }

  update(id: number, updateTryoutDto: UpdateTryoutDto) {
    return `This action updates a #${id} tryout`;
  }

  remove(id: number) {
    return `This action removes a #${id} tryout`;
  }
}
