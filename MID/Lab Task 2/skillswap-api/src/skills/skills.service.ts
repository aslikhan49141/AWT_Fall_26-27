import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SkillEntity } from './skill.entity';
import { SkillCategoryEntity } from '../skill-categories/skill-category.entity';
import { CreateSkillDTO } from './skill.dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(SkillEntity)
    private skillRepo: Repository<SkillEntity>,
    @InjectRepository(SkillCategoryEntity)
    private categoryRepo: Repository<SkillCategoryEntity>,
  ) {}

  async createSkill(data: CreateSkillDTO): Promise<SkillEntity> {
    const category = await this.categoryRepo.findOneBy({ id: data.categoryId });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    const skill = this.skillRepo.create({
      name: data.name,
      description: data.description,
      category: category,
    });
    return this.skillRepo.save(skill);
  }

  getAllSkills(): Promise<SkillEntity[]> {
    return this.skillRepo.find({ relations: { category: true } });
  }

  async getSkillById(id: number): Promise<SkillEntity> {
    const skill = await this.skillRepo.findOne({ where: { id: id }, relations: { category: true } });
    if (!skill) {
      throw new NotFoundException('Skill not found');
    }
    return skill;
  }
}
