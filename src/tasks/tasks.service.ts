import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
	getTasks() {
		return [
			{
				id: 1,
				task: 'Comprar pão',
			},
			{
				id: 2,
				task: 'Comprar queijo',
			},
		];
	}
}
