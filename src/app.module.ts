import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TryoutModule } from './tryout/tryout.module';
import { QuestionModule } from './question/question.module';
import { UserModule } from './user/user.module';
import { HistoryTryoutModule } from './history-tryout/history-tryout.module';

@Module({
  imports: [TryoutModule, QuestionModule, UserModule, HistoryTryoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
