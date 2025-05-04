import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UpdateTaskDto } from './dto/update-task.dto';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
	constructor(private readonly taskService: TasksService) {}
	@Get()
	findAllTasks(@Query() queryParams: any) {
		console.log(queryParams);
		return this.taskService.findAll();
	}

	//pode ficar tbm assim: @Param('id') id: string)
	//@Param() params: { id: string })
	@Get(':id')
	findOneTask(@Param('id') id: number) {
		return this.taskService.findOne(Number(id));
	}

	@Post()
	createTask(@Body() body: CreateTaskDto) {
		return this.taskService.create(body);
	}

	@Patch(':id')
	updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
		return this.taskService.update(Number(id), body);
	}

	@Delete(':id')
	deleteTask(@Param('id') id: string) {
		return this.taskService.delete(Number(id));
	}
}
