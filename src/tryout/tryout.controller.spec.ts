import { Test, TestingModule } from '@nestjs/testing';
import { TryoutController } from './tryout.controller';
import { TryoutService } from './tryout.service';

describe('TryoutController', () => {
  let controller: TryoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TryoutController],
      providers: [TryoutService],
    }).compile();

    controller = module.get<TryoutController>(TryoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
