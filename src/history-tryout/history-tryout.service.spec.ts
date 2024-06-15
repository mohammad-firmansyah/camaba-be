import { Test, TestingModule } from '@nestjs/testing';
import { HistoryTryoutService } from './history-tryout.service';

describe('HistoryTryoutService', () => {
  let service: HistoryTryoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryTryoutService],
    }).compile();

    service = module.get<HistoryTryoutService>(HistoryTryoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
