import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaModule } from '../prisma/prisma.module';
import { TasksRepository } from './repositories/tasks.repository';

@Module({
	imports: [PrismaModule],
	controllers: [TasksController],
	providers: [TasksService, TasksRepository],
})
export class TasksModule {}
