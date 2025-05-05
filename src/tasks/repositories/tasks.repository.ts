import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TasksRepository {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return await this.prisma.task.findMany();
	}

	async findById(id: string) {
		return await this.prisma.task.findUnique({ where: { id } });
	}
}
