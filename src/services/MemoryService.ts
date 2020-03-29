import sqlite3 from 'sqlite3';

const dbLocation = './data/recall_test.db';

// eslint-disable-next-line import/prefer-default-export
export function addMemory(prompt: string, memory: string): void {
  const db = new sqlite3.Database(dbLocation);
  const stmt = db.prepare('INSERT INTO memory(prompt, memory) values(?, ?);', prompt, memory);
  stmt.run();
  stmt.finalize();
}
