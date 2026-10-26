import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSkillCategoryDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;
}
