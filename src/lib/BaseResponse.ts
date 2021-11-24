import { ApiProperty } from '@nestjs/swagger';

export default class BaseResponse<T> {
	@ApiProperty({
		default: 200,
	})
	status: number;

	@ApiProperty()
	message: string;

	data?: T;

	constructor(status: number, message: string, data?: T) {
		this.status = status;
		this.message = message;
		this.data = data;
	}
}
