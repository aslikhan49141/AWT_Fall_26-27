import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillCategoryEntity } from './skill-category.entity';
import { SkillCategoriesController } from './skill-categories.controller';
import { SkillCategoriesService } from './skill-categories.service';

@Module({
  imports: [TypeOrmModule.forFeature([SkillCategoryEntity])],
  controllers: [SkillCategoriesController],
  providers: [SkillCategoriesService],
})
export class SkillCategoriesModule {}
