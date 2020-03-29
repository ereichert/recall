import sqlite3, { Database } from 'sqlite3';
import * as ConfigService from './ConfigService';
import { ConfigKeys } from './ConfigService';

let dbLocation: string;
let db: Database;
const possibleAppName = ConfigService.get(ConfigKeys.DB_LOCATION);
if (possibleAppName) {
  dbLocation = possibleAppName;
  db = new sqlite3.Database(dbLocation);
}

// eslint-disable-next-line import/prefer-default-export
export function addMemory(prompt: string, memory: string): void {
  const stmt = db.prepare('INSERT INTO memory(prompt, memory) values(?, ?);', prompt, memory);
  stmt.run();
  stmt.finalize();
}
