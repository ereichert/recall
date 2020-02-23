import { render, fireEvent } from '@testing-library/vue';
import AddMemory from '@/components/AddMemory.vue';

test('When the new memory is submitted it should be submitted to the repository.',
  async () => {
    const { getByText } = render(AddMemory);
    const addMemoryButton = getByText('Add Memory');

    need to figure out a way to spy on the function attached to the add memory button (which is not attached yet)

    await fireEvent.click(addMemoryButton);

    expect(addMemoryButton.textContent).toEqual('');
  });

test('When the AddMemory form is loaded the Memory should be empty.',
  async () => {
    const { getByLabelText } = render(AddMemory);
    const memory = getByLabelText('Memory');

    expect(memory.textContent).toEqual('');
  });

test('When the AddMemory form is loaded the Prompt should be empty.',
  async () => {
    const { getByLabelText } = render(AddMemory);
    const prompt = getByLabelText('Prompt');

    expect(prompt.textContent).toEqual('');
  });

test('The AddMemory view should render.', () => {
  render(AddMemory);
});
