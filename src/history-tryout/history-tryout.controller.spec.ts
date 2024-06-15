import { Test, TestingModule } from '@nestjs/testing';
import { HistoryTryoutController } from './history-tryout.controller';
import { HistoryTryoutService } from './history-tryout.service';

describe('HistoryTryoutController', () => {
  let controller: HistoryTryoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryTryoutController],
      providers: [HistoryTryoutService],
    }).compile();

    controller = module.get<HistoryTryoutController>(HistoryTryoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
