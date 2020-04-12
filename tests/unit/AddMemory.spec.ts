import { render, fireEvent } from '@testing-library/vue';
import AddMemory from '@/components/AddMemory.vue';
import * as MemoryService from '@/services/MemoryService';
import MemoryRecord from '@/models/MemoryRecord';

describe('The AddMemory component', () => {
  it('When the new memory is submitted it should be submitted to the repository.', async () => {
    const testMemoryRecord = new MemoryRecord('testPrompt', 'testDetails');
    const { getByText, getByLabelText } = render(AddMemory);
    const spy = jest.spyOn(MemoryService, 'addMemory')
      .mockImplementation(() => {
        console.log('ran the db query in add memory tests');
        return Promise.resolve(100);
      });

    const promptField = getByLabelText('Prompt');
    const memoryField = getByLabelText('Memory');
    const addMemoryButton = getByText('Add Memory');
    await fireEvent.update(promptField, testMemoryRecord.prompt);
    await fireEvent.update(memoryField, testMemoryRecord.details);
    await fireEvent.click(addMemoryButton);

    expect(spy).toHaveBeenCalledWith(testMemoryRecord);
  });

  it('When the AddMemory form is loaded the Memory should be empty.', () => {
    const { getByLabelText } = render(AddMemory);
    const memory = getByLabelText('Memory');

    expect(memory.textContent).toEqual('');
  });

  it('When the AddMemory form is loaded the Prompt should be empty.', () => {
    const { getByLabelText } = render(AddMemory);
    const prompt = getByLabelText('Prompt');

    expect(prompt.textContent).toEqual('');
  });

  it('The AddMemory view should render.', () => {
    render(AddMemory);
  });
});
