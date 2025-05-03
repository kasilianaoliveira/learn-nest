export class Task {
	id: number;
	name: string;
	description: string;
	completed: boolean;
}

export type TaskInput = Omit<Task, 'id'>;
