import MemoryService from '@/services/MemoryService';

test('When the new memory is submitted it should be submitted to the repository.', async () => {
  await MemoryService.addMemory('new prompt', 'new memory');
});
