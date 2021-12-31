import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StdEmitterService } from './stdemitter/stdemitter.service';
import { Log4JsemitterService } from './log4-jsemitter/log4-jsemitter.service';
import { ConsoleEmitterService } from './console-emitter/console-emitter.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MessageGeneratorService } from './message-generator/message-generator.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, StdEmitterService, Log4JsemitterService, ConsoleEmitterService, MessageGeneratorService],
})
export class AppModule {}
