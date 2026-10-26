import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillEntity } from './skill.entity';
import { SkillCategoryEntity } from '../skill-categories/skill-category.entity';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

@Module({
  imports: [TypeOrmModule.forFeature([SkillEntity, SkillCategoryEntity])],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
