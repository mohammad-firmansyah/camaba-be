import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TryoutService } from './tryout.service';
import { CreateTryoutDto } from './dto/create-tryout.dto';
import { UpdateTryoutDto } from './dto/update-tryout.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('tryout')
@ApiTags('Tryout')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class TryoutController {
  constructor(private readonly tryoutService: TryoutService) {}

  @Post()
  create(@Body() createTryoutDto: CreateTryoutDto) {
    return this.tryoutService.create(createTryoutDto);
  }

  @Get()
  findAll() {
    return this.tryoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tryoutService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTryoutDto: UpdateTryoutDto) {
    return this.tryoutService.update(id, updateTryoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tryoutService.remove(id);
  }
}
