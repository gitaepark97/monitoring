import { WinstonModule, utilities } from 'nest-winston';
import winston from 'winston';
import winstonDaily from 'winston-daily-rotate-file';

const dailyOption = (level: string) => {
  return {
    level,
    datePattern: 'YYYY-MM-DD',
    dirname: `./logs/${level}`,
    filename: `%DATE%.${level}.log`,
    maxFiles: 1,
    format: winston.format.combine(
      winston.format.timestamp(),
      utilities.format.nestLike('lucky-draw', {
        colors: false,
        prettyPrint: true,
      }),
    ),
  };
};

export const winstonLogger = WinstonModule.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'http',
      format: winston.format.combine(
        winston.format.timestamp(),
        utilities.format.nestLike('server', {
          colors: true,
          prettyPrint: true,
        }),
      ),
    }),
    new winstonDaily(dailyOption('info')),
    new winstonDaily(dailyOption('warn')),
    new winstonDaily(dailyOption('error')),
  ],
});
