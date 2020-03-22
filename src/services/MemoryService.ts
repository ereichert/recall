import sqlite3 from 'sqlite3';

export default class MemoryService {
  static addMemory(prompt: string, memory: string): void {
    console.log('called the service');
    const db = new sqlite3.Database('./data/recall_test.db');
    const stmt = db.prepare('INSERT INTO memory(prompt, memory) values(?, ?);', prompt, memory);
    stmt.run();
    stmt.finalize();
  }
}
