import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HistoryTryoutService } from './history-tryout.service';
import { CreateHistoryTryoutDto } from './dto/create-history-tryout.dto';
import { UpdateHistoryTryoutDto } from './dto/update-history-tryout.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('history-tryout')
@ApiTags('HistoryTryout')
export class HistoryTryoutController {
  constructor(private readonly historyTryoutService: HistoryTryoutService) {}

  @Post()
  create(@Body() createHistoryTryoutDto: CreateHistoryTryoutDto) {
    return this.historyTryoutService.create(createHistoryTryoutDto);
  }

  @Get()
  findAll() {
    return this.historyTryoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.historyTryoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHistoryTryoutDto: UpdateHistoryTryoutDto) {
    return this.historyTryoutService.update(+id, updateHistoryTryoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.historyTryoutService.remove(+id);
  }
}
