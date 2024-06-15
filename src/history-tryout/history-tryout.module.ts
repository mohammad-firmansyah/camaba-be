import { Module } from '@nestjs/common';
import { HistoryTryoutService } from './history-tryout.service';
import { HistoryTryoutController } from './history-tryout.controller';

@Module({
  controllers: [HistoryTryoutController],
  providers: [HistoryTryoutService],
})
export class HistoryTryoutModule {}
