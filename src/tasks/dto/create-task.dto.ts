import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateTaskDto {
	@ApiProperty({
		description: 'Title of the task',
		example: 'Buy groceries',
		required: true,
	})
	@IsNotEmpty({ message: 'Title is required.' })
	@IsString({ message: 'Title must be a string.' })
	@MinLength(5, { message: 'Title must be at least 5 characters long.' })
	readonly name: string;

	@ApiProperty({
		description: 'Detailed description of the task',
		example: 'Milk, bread, eggs, and cheese',
		required: true,
	})
	@IsNotEmpty({ message: 'Title is required.' })
	@IsString({ message: 'Description must be a string.' })
	@MinLength(5, { message: 'Description must be at least 5 characters long.' })
	readonly description: string;
}
