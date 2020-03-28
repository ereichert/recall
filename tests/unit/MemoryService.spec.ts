import sqlite3 from 'sqlite3';
import * as MemoryService from '@/services/MemoryService';

describe('When a prompt and memory are submitted to the addMemory function', () => {
  let db;

  beforeEach(() => {
    db = new sqlite3.Database('./data/recall_test.db');
  });
  it('the MemoryService should store the memory.', () => {
    MemoryService.addMemory('fifth prompt', 'fifth memory');
  });
});
