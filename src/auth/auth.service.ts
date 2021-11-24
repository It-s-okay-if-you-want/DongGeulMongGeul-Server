import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/entities/User';
import { Repository } from 'typeorm';
import RegisterDto from './dto/register.dto';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private authRepo: Repository<User>,
	) { }

	async register(registerDto: RegisterDto): Promise<void> {
		const isExistUser = await this.authRepo.findOne({

		})
	}
}
