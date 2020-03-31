import * as MemoryService from '@/services/MemoryService';

describe('When a prompt and memory are submitted to the addMemory function', () => {
  beforeAll(() => {
    MemoryService.initDbWithLocation('./data/recall_test.db');
  });

  it('the MemoryService should store the memory.', () => {
    MemoryService.addMemory('fifth prompt', 'fifth memory');
  });
});
