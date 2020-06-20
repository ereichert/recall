import * as MemoryService from '@/services/MemoryService';
import sqlite, { Database } from 'sqlite';
import { promises as asyncFS } from 'fs';
import MemoryRecord from '@/models/MemoryRecord';

const TEST_DB_LOCATION = './test_data/memory_service_test.db';
let testDbPromise: Promise<Database>;

const createDb = async (dbLocation: string): Promise<void> => {
  console.log('Creating the MemoryService test database.');
  testDbPromise = sqlite.open(dbLocation);
  const testDb = await testDbPromise;
  testDb.exec('CREATE TABLE memories (mem_id INTEGER PRIMARY KEY, prompt TEXT, details TEXT)');
};

const deleteExistingTestDb = async (): Promise<void> => asyncFS.unlink(TEST_DB_LOCATION);

describe('When all of the memories are requested', () => {
  describe('and when the database is operating correctly', () => {
    beforeAll(async () => {
      await deleteExistingTestDb();
      await createDb(TEST_DB_LOCATION);
      MemoryService.initDbWithLocation(TEST_DB_LOCATION);
    });

    afterAll(async () => {
      console.log('Closing the MemoryService test database.');
      const testDb = await testDbPromise;
      await testDb.close();
    });

    it('should return all of the memories in the database.', () => {
      expect(true).toBe(true);
    });

    it('should not return any memories when there are none in the database.', async () => {
      const expectedMemories = await MemoryService.getAllMemoryRecordReviews();

      expect(expectedMemories.length).toEqual(0);
    });
  });
});

describe('When a prompt and memory are submitted to the addMemory function', () => {
  describe('and when the database is operating correctly', () => {
    beforeAll(async () => {
      await deleteExistingTestDb();
      await createDb(TEST_DB_LOCATION);
      MemoryService.initDbWithLocation(TEST_DB_LOCATION);
    });

    afterAll(async () => {
      console.log('Closing the MemoryService test database.');
      const testDb = await testDbPromise;
      await testDb.close();
    });

    it('the MemoryService should store the memory and return the memory id.', async () => {
      const returnedId = await MemoryService.addMemory(new MemoryRecord('new prompt', 'new memory'));

      expect(returnedId).toBeGreaterThan(0);
    });

    it('the MemoryService should store the memory and be able to return that memory by id.', async () => {
      const returnedId = await MemoryService.addMemory(new MemoryRecord('new prompt', 'new memory'));

      const testDb = await testDbPromise;
      const returnedMemory = await testDb.get('SELECT * FROM memories where mem_id = ?;', returnedId);

      expect(returnedMemory).toEqual({
        mem_id: returnedId, // eslint-disable-line @typescript-eslint/camelcase
        prompt: 'new prompt',
        details: 'new memory',
      });
    });
  });

  describe('and when the database is closed', () => {
    it('should throw an exception if the database is not open.', async () => {
      await MemoryService.closeDb();

      await expect(MemoryService.addMemory(new MemoryRecord('exception prompt', 'exception memory')))
        .rejects.toThrow('SQLITE_MISUSE: Database is closed');
    });
  });
});
