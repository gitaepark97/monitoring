import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('random-number')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('1')
  getRandomNumber1(): number {
    return this.appService.getRandomNumber();
  }

  @Get('2')
  getRandomNumber2(): number {
    return this.appService.getRandomNumber();
  }
}
