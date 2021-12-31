import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessageGeneratorService } from 'src/message-generator/message-generator.service';

@Injectable()
export class ConsoleEmitterService {
  constructor(private configService: ConfigService, private msgGen: MessageGeneratorService) {
    const use: string = this.configService.get<string>('CONSOLE_EMITTER');

    const iterator = msgGen.generateLogMessage()
    if(use == 'true')
      setInterval(function () {
        console.log(iterator.next().value)
      }, 1000); //run this thang every 1 second
  }
}
