import { Test, TestingModule } from '@nestjs/testing';
import { StdEmitterService } from './stdemitter.service';

describe('StdEmitterService', () => {
  let service: StdEmitterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StdEmitterService],
    }).compile();

    service = module.get<StdEmitterService>(StdEmitterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
