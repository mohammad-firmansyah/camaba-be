import { Module } from '@nestjs/common';
import { TryoutService } from './tryout.service';
import { TryoutController } from './tryout.controller';

@Module({
  controllers: [TryoutController],
  providers: [TryoutService],
})
export class TryoutModule {}
