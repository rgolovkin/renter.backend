import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor() {}

  async get(type: string) {
    if (type === '1') return 'Hello';
    if (type === '2') return 'World';
    if (type === '3') return 'Hello World';

    throw new HttpException('Query param type error', HttpStatus.BAD_REQUEST);
  }

  async getByParam(id: string) {
    if (id === 'hello') return 'Hello';
    if (id === '2') return 'World';
    if (id === '3') return 'Hello World';

    throw new HttpException('Query param type error', HttpStatus.BAD_REQUEST);
  }
}
