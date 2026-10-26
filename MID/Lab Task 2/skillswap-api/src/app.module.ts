import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DATABASE_CONFIG } from './database.config';
import { UsersModule } from './users/users.module';
import { SkillCategoriesModule } from './skill-categories/skill-categories.module';
import { SkillsModule } from './skills/skills.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...DATABASE_CONFIG,
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsersModule,
    SkillCategoriesModule,
    SkillsModule,
  ],
})
export class AppModule {}
