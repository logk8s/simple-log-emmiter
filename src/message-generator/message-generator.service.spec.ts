import { Test, TestingModule } from '@nestjs/testing';
import { MessageGeneratorService } from './message-generator.service';

describe('MessageGeneratorService', () => {
  let service: MessageGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageGeneratorService],
    }).compile();

    service = module.get<MessageGeneratorService>(MessageGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
