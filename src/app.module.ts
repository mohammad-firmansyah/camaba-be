import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TryoutModule } from './tryout/tryout.module';

@Module({
  imports: [TryoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
