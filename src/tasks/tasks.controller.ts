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
		console.log(typeof id);
		return this.taskService.findOne(Number(id));
	}

	@Post()
	createTask(@Body() body: any) {
		console.log(body);

		return this.taskService.create(body);
	}

	@Patch(':id')
	updateTask(@Param('id') id: string, @Body() body: any) {
		return this.taskService.update(Number(id), body);
	}

	@Delete(':id')
	deleteTask(@Param('id') id: string) {
		return this.taskService.delete(Number(id));
	}
}
