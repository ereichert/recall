import sqlite, { Database } from 'sqlite';
import MemoryRecord from '@/models/MemoryRecord';
import * as ConfigService from './ConfigService';
import { ConfigKeys } from './ConfigService';

let dbLocation: string;
let dbPromise: Promise<Database>;

export function initDbWithLocation(location: string): void {
  dbLocation = location;
  dbPromise = sqlite.open(dbLocation);
  // eslint-disable-next-line no-console
  console.log(`Opened the database at ${dbLocation}.`);
}

export async function closeDb(): Promise<void> {
  const db = await dbPromise;
  return db.close();
}

export function initWithConfig(): void {
  const possibleDbLocation = ConfigService.get(ConfigKeys.DB_LOCATION);
  if (possibleDbLocation) {
    initDbWithLocation(possibleDbLocation);
  }
}

export async function addMemory(memoryRecord: MemoryRecord): Promise<number> {
  const db = await dbPromise;
  return db.run('INSERT INTO memories(prompt, details) values(?, ?);', memoryRecord.prompt, memoryRecord.details)
    .then((statement) => statement.lastID);
}
