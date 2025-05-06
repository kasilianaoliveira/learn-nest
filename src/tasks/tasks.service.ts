import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repositories/tasks.repository';

@Injectable()
export class TasksService {
	constructor(private readonly tasksRepository: TasksRepository) {}

	async findAll() {
		const allTasks = await this.tasksRepository.findAll();

		if (!allTasks.length) {
			throw new HttpException('Tasks not found', HttpStatus.NOT_FOUND);
		}

		return allTasks;
	}

	async findOne(id: string) {
		const findItem = await this.tasksRepository.findById(id);

		if (!findItem) {
			throw new HttpException('Task not found', HttpStatus.NOT_FOUND);
		}

		return findItem;
	}

	async create(createTaskDTO: CreateTaskDto) {
		return await this.tasksRepository.create(createTaskDTO);
	}

	async delete(id: string) {
		const task = await this.tasksRepository.findById(id);
		if (!task) {
			throw new HttpException(
				`Task with id ${id} not found.`,
				HttpStatus.NOT_FOUND,
			);
		}

		try {
			return await this.tasksRepository.delete(id);
		} catch (error) {
			console.log(error);
			throw new HttpException(
				'Error deleting task',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}

	async update(id: string, updateTaskDto: UpdateTaskDto) {
		const task = await this.tasksRepository.findById(id);
		if (!task) {
			throw new HttpException(
				`Task with id ${id} not found.`,
				HttpStatus.NOT_FOUND,
			);
		}

		try {
			return await this.tasksRepository.update(id, updateTaskDto);
		} catch (error) {
			console.log(error);
			throw new HttpException(
				'Error updating task',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}
}
