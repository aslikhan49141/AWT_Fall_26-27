import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDTO } from './skill.dto';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  createSkill(@Body() data: CreateSkillDTO) {
    return this.skillsService.createSkill(data);
  }

  @Get()
  getAllSkills() {
    return this.skillsService.getAllSkills();
  }

  @Get(':id')
  getSkillById(@Param('id', ParseIntPipe) id: number) {
    return this.skillsService.getSkillById(id);
  }
}
