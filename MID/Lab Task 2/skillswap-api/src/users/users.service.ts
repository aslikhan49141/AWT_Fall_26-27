import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './user.entity';
import { CreateUserDTO } from './user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
  ) {}

  async createUser(data: CreateUserDTO): Promise<UserEntity> {
    const existing = await this.userRepo.findOneBy({ email: data.email });
    if (existing) {
      throw new ConflictException('Email already exists');
    }
    const hash = await bcrypt.hash(data.password, 10);
    const user = this.userRepo.create({
      name: data.name,
      email: data.email,
      passwordHash: hash,
      bio: data.bio,
      location: data.location,
    });
    const saved = await this.userRepo.save(user);
    delete saved.passwordHash;
    return saved;
  }

  getAllUsers(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  async getUserById(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findOneBy({ id: id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }
}
