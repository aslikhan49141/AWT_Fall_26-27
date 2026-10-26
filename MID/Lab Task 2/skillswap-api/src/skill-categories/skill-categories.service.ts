import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SkillCategoryEntity } from './skill-category.entity';
import { CreateSkillCategoryDTO } from './skill-category.dto';

@Injectable()
export class SkillCategoriesService {
  constructor(
    @InjectRepository(SkillCategoryEntity)
    private categoryRepo: Repository<SkillCategoryEntity>,
  ) {}

  async createCategory(data: CreateSkillCategoryDTO): Promise<SkillCategoryEntity> {
    const existing = await this.categoryRepo.findOneBy({ name: data.name });
    if (existing) {
      throw new ConflictException('Category name already exists');
    }
    const category = this.categoryRepo.create(data);
    return this.categoryRepo.save(category);
  }

  getAllCategories(): Promise<SkillCategoryEntity[]> {
    return this.categoryRepo.find();
  }

  async getCategoryById(id: number): Promise<SkillCategoryEntity> {
    const category = await this.categoryRepo.findOneBy({ id: id });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }
}
