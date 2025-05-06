import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return await this.prisma.task.findMany();
	}

	async findById(id: string) {
		return await this.prisma.task.findUnique({ where: { id } });
	}

	async create(data: CreateTaskDto) {
		return await this.prisma.task.create({
			data: data,
		});
	}

	async update(id: string, data: UpdateTaskDto) {
		return await this.prisma.task.update({
			where: { id },
			data,
		});
	}

	async delete(id: string) {
		return await this.prisma.task.delete({
			where: { id },
		});
	}
}
