import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SkillEntity } from '../skills/skill.entity';

@Entity('skill_categories')
export class SkillCategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => SkillEntity, (skill) => skill.category)
  skills: SkillEntity[];
}
