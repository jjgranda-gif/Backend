import { Module } from '@nestjs/common';
import { TasksController } from './app.controller';
import { TasksService } from './app.service';

@Module({
  imports:[],
  controllers: [],
  providers: [TasksService],
})
export class AppModule {}