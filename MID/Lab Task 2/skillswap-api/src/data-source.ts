import { DataSource } from 'typeorm';
import { DATABASE_CONFIG } from './database.config';

export default new DataSource({
  ...DATABASE_CONFIG,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  synchronize: false,
});
