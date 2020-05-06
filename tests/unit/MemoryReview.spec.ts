import { render, fireEvent } from '@testing-library/vue';
import MemoryReview from '@/components/MemoryReview.vue';

describe('The MemoryReview component', () => {
  it('should hide the Show Memory Details button when it is clicked.', async () => {
    const { getByText, queryByText } = render(MemoryReview);
    const memoryDetailsButton = getByText('Show Memory Details');

    await fireEvent.click(memoryDetailsButton);
    const missingMemoryDetailsButton = queryByText('Show Memory Details');

    expect(missingMemoryDetailsButton).toBeNull();
  });

  it('should show the memory details when the Show Memory Details button is clicked', async () => {
    const { queryAllByLabelText, getByLabelText, getByText } = render(MemoryReview);

    expect(queryAllByLabelText('Memory Details')).toHaveLength(0);

    const memoryDetailsButton = getByText('Show Memory Details');
    await fireEvent.click(memoryDetailsButton);

    getByLabelText('Memory Details');
  });

  it('should have a button for showing the memory details.', () => {
    const { getByText } = render(MemoryReview);

    getByText('Show Memory Details');
  });

  it('should should the prompt text of the first memory when memories exist.', () => {
    const { getByLabelText } = render(MemoryReview);

    const promptText = getByLabelText('Prompt');

    expect(promptText.textContent).toEqual('this is the prompt');
  });

  it('should show the Prompt heading when Memories exist.', () => {
    const { getByText } = render(MemoryReview);

    getByText('Prompt');
  });

  it('should render.', () => {
    render(MemoryReview);
  });
});
