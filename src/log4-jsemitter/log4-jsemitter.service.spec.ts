import { Test, TestingModule } from '@nestjs/testing';
import { Log4JsemitterService } from './log4-jsemitter.service';

describe('Log4JsemitterService', () => {
  let service: Log4JsemitterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Log4JsemitterService],
    }).compile();

    service = module.get<Log4JsemitterService>(Log4JsemitterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
