import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Task, TaskInput } from './entities/task.entity';

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

	create(body: TaskInput) {
		const newId = this.tasks.length + 1;
		const newTask = {
			id: newId,
			...body,
		};
		this.tasks.push(newTask);
		return this.tasks;
	}

	delete(id: number) {
		const indexTaskId = this.tasks.findIndex((item) => item.id === id);

		if (indexTaskId !== -1) {
			this.tasks.splice(indexTaskId, 1);
		}
		return this.tasks;
	}

	update(id: number, body: TaskInput) {
		const taskIndex = this.tasks.findIndex((task) => task.id === id);

		if (taskIndex < 0) {
			throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
		}
		const taskItem = this.tasks[taskIndex];

		this.tasks[taskIndex] = {
			...taskItem,
			...body,
		};

		return 'Tarefa atualizada com sucesso';
	}
}
