import { Logger, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { MetricMiddleware } from './metric/metric.middleware';

@Module({
  imports: [PrometheusModule.register()],
  providers: [
    Logger,
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class CommonModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MetricMiddleware).exclude('/metrics').forRoutes('*');
  }
}
