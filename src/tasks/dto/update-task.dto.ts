import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
	@ApiProperty({
		description: 'Status of the task, whether it is completed or not',
		example: true,
		required: false,
	})
	@IsBoolean({ message: 'Completed must be a boolean value.' })
	@IsOptional()
	readonly completed?: boolean;
}
