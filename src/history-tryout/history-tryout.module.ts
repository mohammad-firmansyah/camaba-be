import { Module } from '@nestjs/common';
import { HistoryTryoutService } from './history-tryout.service';
import { HistoryTryoutController } from './history-tryout.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [HistoryTryoutController],
  providers: [HistoryTryoutService,PrismaService],
})
export class HistoryTryoutModule {}
