import { Module } from '@nestjs/common';
import { TryoutService } from './tryout.service';
import { TryoutController } from './tryout.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TryoutController],
  providers: [TryoutService, PrismaService],
})
export class TryoutModule {}
