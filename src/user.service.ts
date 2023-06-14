import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userData: User): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    const findOneOptions: FindOneOptions<User> = ({ where: { id } });
    return this.userRepository.findOne(findOneOptions);
  }

  
  async  updateUser(id :number, userData : User) : Promise<User>{
    const user = await this.findOne(id);
    this.userRepository.merge(user, userData);
    return this.userRepository.save(user);
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}