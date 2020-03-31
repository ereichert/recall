import sqlite3, { Database } from 'sqlite3';
import * as ConfigService from './ConfigService';
import { ConfigKeys } from './ConfigService';

let dbLocation: string;
let db: Database;

export function initDbWithLocation(location: string): void {
  dbLocation = location;
  db = new sqlite3.Database(dbLocation);
}

export function initWithConfig(): void {
  const possibleDbLocation = ConfigService.get(ConfigKeys.DB_LOCATION);
  if (possibleDbLocation) {
    dbLocation = possibleDbLocation;
    db = new sqlite3.Database(dbLocation);
  }
}

export function addMemory(prompt: string, memory: string): void {
  const stmt = db.prepare('INSERT INTO memory(prompt, memory) values(?, ?);', prompt, memory);
  stmt.run();
  stmt.finalize();
}
