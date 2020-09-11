import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { TaskService } from './tasks/shared/task.service';
import { TasksModule } from './tasks/tasks.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:sHYMO4GU86ScGA6R@cluster0.pst6b.gcp.mongodb.net/BaseGeral?retryWrites=true&w=majority'),
    TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
