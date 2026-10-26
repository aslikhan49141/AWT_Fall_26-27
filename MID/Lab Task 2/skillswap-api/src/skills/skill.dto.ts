import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateSkillDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  categoryId: number;
}
