import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SkillCategoryEntity } from '../skill-categories/skill-category.entity';

@Entity('skills')
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @ManyToOne(() => SkillCategoryEntity, (category) => category.skills, { nullable: false, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'category_id' })
  category: SkillCategoryEntity;
}
