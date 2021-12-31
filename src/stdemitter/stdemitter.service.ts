import { Module } from '@nestjs/common';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MessageGeneratorService } from 'src/message-generator/message-generator.service';

@Injectable()
export class StdEmitterService {
  private logger: Logger = new Logger('StdEmitterService')

  constructor(private configService: ConfigService, private msgGen: MessageGeneratorService) {
    const use: string = this.configService.get<string>('STD_EMITTER');

    if(use != 'true')
      return

    const iterator = msgGen.generateLogMessage();
    const logger = this.logger;
    setInterval(function () {
      logger.debug(iterator.next().value)
    }, 1000); //runs every 1 second
  }

}
