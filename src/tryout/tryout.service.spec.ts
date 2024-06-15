import { Test, TestingModule } from '@nestjs/testing';
import { TryoutService } from './tryout.service';

describe('TryoutService', () => {
  let service: TryoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TryoutService],
    }).compile();

    service = module.get<TryoutService>(TryoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
