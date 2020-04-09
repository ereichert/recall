import * as MemoryService from '@/services/MemoryService';

describe('When a prompt and memory are submitted to the addMemory function', () => {
  beforeEach(() => {
    MemoryService.initDbWithLocation('./data/recall_test.db');
  });

  it('should throw an exception if the database is not open.', async () => {
    await MemoryService.closeDb();

    await expect(MemoryService.addMemory('exception prompt', 'exception memory'))
      .rejects.toThrow('SQLITE_MISUSE: Database is closed');
  });

  it('the MemoryService should store the memory.', async () => {
    const returnedId = await MemoryService.addMemory('new prompt', 'new memory');
    expect(returnedId).toBeGreaterThan(0);
  });

  // it('sandbox get', async () => {
  //   const db = await sqlite.open('./data/recall_test.db');
  //   const result = await db.get('SELECT * FROM memory');
  //   // eslint-disable-next-line @typescript-eslint/camelcase
  //   expect(result).toEqual({ mem_id: 194, prompt: 'fifth prompt', memory: 'fifth memory' });
  //   await db.close();
  // });

  // it('sandbox on close', async () => {
  //   try {
  //     const db = await sqlite.open('./data/recall_test.db');
  //     await db.get('SELECT * FROM tbl1');
  //     await db.close();
  //   } catch (err) {
  //     console.log(`caught the error ${err}`);
  //   }
  // });
});
