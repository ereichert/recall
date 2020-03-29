import * as MemoryService from '@/services/MemoryService';

describe('When a prompt and memory are submitted to the addMemory function', () => {
  it('the MemoryService should store the memory.', () => {
    MemoryService.addMemory('fifth prompt', 'fifth memory');
  });
});
