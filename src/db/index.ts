import { env } from '@/env/server';
import { drizzle } from 'drizzle-orm/postgres-js'

const db = drizzle(env.SUPABASE_DATABASE_URL);

export { db };
export type DB = typeof db;

