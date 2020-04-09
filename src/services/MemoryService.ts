import sqlite, { Database } from 'sqlite';
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

export async function addMemory(prompt: string, memory: string): Promise<number> {
  const db = await dbPromise;
  return db.run('INSERT INTO memory(prompt, memory) values(?, ?);', prompt, memory)
    .then((statement) => statement.lastID);
}
