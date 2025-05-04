import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
	private readonly tasks: Task[] = [
		{
			id: 1,
			name: 'sujeito programador',
			description: 'Minha descrição',
			completed: false,
		},
		{
			id: 2,
			name: 'comprar pão',
			description: 'Minha descrição',
			completed: false,
		},
	];
	findAll() {
		const tasks = this.tasks;
		if (tasks.length > 0) return tasks;

		throw new HttpException('Tasks not found', HttpStatus.NOT_FOUND);
	}

	findOne(id: number) {
		const findItem = this.tasks.find((item) => item.id === id);
		if (findItem) return findItem;

		throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
	}

	create(createTaskDTO: CreateTaskDto) {
		const newId = this.tasks.length + 1;

		const newTask = {
			id: newId,
			...createTaskDTO,
			completed: false,
		};
		this.tasks.push(newTask);
		return this.tasks;
	}

	delete(id: number) {
		const indexTaskId = this.tasks.findIndex((item) => item.id === id);

		if (indexTaskId < 0) {
			throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
		}
		this.tasks.splice(indexTaskId, 1);
		return {
			message: 'Tarefa deletada com sucesso!',
		};
	}

	update(id: number, updateTaskDto: UpdateTaskDto) {
		const taskIndex = this.tasks.findIndex((task) => task.id === id);

		if (taskIndex < 0) {
			throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
		}

		const taskItem = this.tasks[taskIndex];

		this.tasks[taskIndex] = {
			...taskItem,
			...updateTaskDto,
		};

		return this.tasks[taskIndex];
	}
}
