import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SkillCategoriesService } from './skill-categories.service';
import { CreateSkillCategoryDTO } from './skill-category.dto';

@Controller('skill-categories')
export class SkillCategoriesController {
  constructor(private readonly categoriesService: SkillCategoriesService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createCategory(@Body() data: CreateSkillCategoryDTO) {
    return this.categoriesService.createCategory(data);
  }

  @Get()
  getAllCategories() {
    return this.categoriesService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.getCategoryById(id);
  }
}
