import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
  constructor(private readonly service: TestService) {}

  @Get('get')
  async get(@Query('type') type: '1' | '2' | '3') {
    return await this.service.get(type);
  }

  @Get('param/:id')
  async getByParam(@Param('id') id: string) {
    return await this.service.getByParam(id);
  }

  @Post()
  async create() {}

  @Put()
  async update() {}

  @Patch()
  async updatePatch() {}

  @Delete()
  async delete() {}
}
