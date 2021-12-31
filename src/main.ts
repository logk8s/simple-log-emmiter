import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import {
  NestjsWinstonLoggerService,
  appendRequestIdToLogger,
  LoggingInterceptor,
  configMorgan,
  morganRequestLogger,
  morganResponseLogger,
  appendIdToRequest
} from "nestjs-winston-logger";
import { format, transports } from "winston";

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  //initializeWinstonLogger(app)
  await app.listen(3010)
}
bootstrap()

function initializeWinstonLogger(app: INestApplication) {
  const globalLogger = new NestjsWinstonLoggerService({
    format: format.combine(
      format.timestamp({ format: "isoDateTime" }),
      format.json(),
      format.colorize({ all: true }),
    ),
    transports: [
      new transports.File({ filename: "error.log", level: "error" }),
      new transports.File({ filename: "combined.log" }),
      new transports.Console(),
    ],
  });
  app.useLogger(globalLogger);
  // append id to identify request
  // app.use(appendIdToRequest);
  // app.use(appendRequestIdToLogger(globalLogger));

  // configMorgan.appendMorganToken("reqId", TOKEN_TYPE.Request, "reqId");
  // app.use(morganRequestLogger(globalLogger));
  // app.use(morganResponseLogger(globalLogger));
  // app.useGlobalInterceptors(new LoggingInterceptor(globalLogger));
}

