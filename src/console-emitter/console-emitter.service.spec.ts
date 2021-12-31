import { Test, TestingModule } from '@nestjs/testing';
import { ConsoleEmitterService } from './console-emitter.service';

describe('ConsoleEmitterService', () => {
  let service: ConsoleEmitterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsoleEmitterService],
    }).compile();

    service = module.get<ConsoleEmitterService>(ConsoleEmitterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
