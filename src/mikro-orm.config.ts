import { __prod__ } from '../constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';

export default {
  migrations: {
    path: path.join(__dirname, '/migrations'), // path to folder with migration files
    pattern: /^[\w-]+\d+\.[tj]s$/, // how to match migration files
  },
  entities: [Post],
  dbName: 'lireddit',
  user: 'postgres',
  password: 'postgres',
  type: 'postgresql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
