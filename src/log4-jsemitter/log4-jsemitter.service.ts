import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { configure, getLogger } from "log4js";
import { MessageGeneratorService } from 'src/message-generator/message-generator.service';

@Injectable()
export class Log4JsemitterService {
  constructor(private configService: ConfigService, private msgGen: MessageGeneratorService) {
    const use : string = this.configService.get<string>('LOG4JS_EMITTER');
    if (use != 'true')
      return
    configure({
      appenders: { out: { type: 'stdout', layout: { type: 'colored' } } },
      categories: { default: { appenders: ['out'], level: 'debug' } }
        });
    var logger = getLogger('Log4JsemitterService');
    logger.level = "debug";
    const iterator = msgGen.generateLogMessage();
    setInterval(function () {
      logger.debug(iterator.next().value)
    }, 1000);//run this thang every 1 second

  }
}

