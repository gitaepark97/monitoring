import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';

@Injectable()
export class AppService {
  getRandomNumber(): number {
    const randomNumber = Math.floor(Math.random() * 1100) - 100;
    if (randomNumber < 0) {
      if (randomNumber < -70)
        throw new InternalServerErrorException('서버 오류입니다.');
      else throw new BadRequestException('잘못된 입력입니다.');
    }
    return randomNumber;
  }
}
