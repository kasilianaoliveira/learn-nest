import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateTaskDTO {
	@ApiProperty({
		description: 'Title of the task',
		example: 'Buy groceries',
		required: false,
	})
	@IsString({ message: 'Title must be a string.' })
	@MinLength(5, { message: 'Title must be at least 5 characters long.' })
	@IsOptional()
	readonly name?: string;

	@ApiProperty({
		description: 'Detailed description of the task',
		example: 'Milk, bread, eggs, and cheese',
		required: false,
	})
	@IsString({ message: 'Description must be a string.' })
	@MinLength(5, { message: 'Description must be at least 5 characters long.' })
	@IsOptional()
	readonly description?: string;

	@ApiProperty({
		description: 'Status of the task, whether it is completed or not',
		example: true,
		required: false,
	})
	@IsBoolean({ message: 'Completed must be a boolean value.' })
	@IsOptional()
	readonly completed?: boolean;
}
