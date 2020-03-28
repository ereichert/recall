import { render, fireEvent } from '@testing-library/vue';
import AddMemory from '@/components/AddMemory.vue';
import * as MemoryService from '@/services/MemoryService';

test('When the new memory is submitted it should be submitted to the repository.', async () => {
  const { getByText } = render(AddMemory);
  const spy = jest.spyOn(MemoryService, 'addMemory')
    .mockImplementation(() => { console.log('ran the db query in add memory tests'); });

  const addMemoryButton = getByText('Add Memory');

  await fireEvent.click(addMemoryButton);

  expect(spy).toHaveBeenCalled();
});

test('When the AddMemory form is loaded the Memory should be empty.', () => {
  const { getByLabelText } = render(AddMemory);
  const memory = getByLabelText('Memory');

  expect(memory.textContent).toEqual('');
});

test('When the AddMemory form is loaded the Prompt should be empty.', () => {
  const { getByLabelText } = render(AddMemory);
  const prompt = getByLabelText('Prompt');

  expect(prompt.textContent).toEqual('');
});

test('The AddMemory view should render.', () => {
  render(AddMemory);
});
