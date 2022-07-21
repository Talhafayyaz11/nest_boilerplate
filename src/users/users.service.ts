import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { CurrentUser } from '../decorators/currentUser.decorator';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async findOne(name: string): Promise<User | undefined> {
    return this.userRepository.findOneBy({ name });
  }

  async findCurrentUser() {
    return { name: 'talha' };
  }

  async create(user: CreateUserDto): Promise<User | undefined> {
    const { password, ...rest } = user;
    const entity = this.userRepository.create({
      ...rest,
      encryptedPassword: password,
    });
    this.userRepository.save(entity);
    return entity;
  }
  catch(e) {
    console.log(e);
  }
}
