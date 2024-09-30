import { Module } from '@nestjs/common';
import { DataBaseModule } from './db.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [DataBaseModule, TestModule],
})
export class AppModule {}
