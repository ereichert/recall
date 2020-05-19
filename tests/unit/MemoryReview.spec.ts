import { render, fireEvent } from '@testing-library/vue';
import MemoryReview from '@/components/MemoryReview.vue';

const showMemoryDetailsButtonText = 'Show Memory Details';

describe('The MemoryReview component', () => {
  it('should show the second Memory prompt when the Took too long resolution button is clicked.', async () => {
    const { getByText, getByLabelText } = render(MemoryReview);

    const promptText = getByLabelText('Prompt');
    expect(promptText.textContent).toEqual('this is the prompt');

    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);
    const resolutionButton = getByText('Took too long');
    await fireEvent.click(resolutionButton);

    const secondPromptText = getByLabelText('Prompt');
    expect(secondPromptText.textContent).toEqual('This is the second memory prompt.');
  });

  it('should show the second Memory resolution button when the Show Memory Details button is clicked.', async () => {
    const { getByText } = render(MemoryReview);
    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);

    getByText('Quick');
  });

  it('should show the second Memory resolution button when the Show Memory Details button is clicked.', async () => {
    const { getByText } = render(MemoryReview);
    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);

    getByText('A little slow');
  });

  it('should show the first Memory resolution button when the Show Memory Details button is clicked.', async () => {
    const { getByText } = render(MemoryReview);
    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);

    getByText('Took too long');
  });

  it('should hide the Show Memory Details button when it is clicked.', async () => {
    const { getByText, queryByText } = render(MemoryReview);
    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);

    await fireEvent.click(memoryDetailsButton);
    const missingMemoryDetailsButton = queryByText(showMemoryDetailsButtonText);

    expect(missingMemoryDetailsButton).toBeNull();
  });

  it('should show the memory details when the Show Memory Details button is clicked', async () => {
    const { queryAllByLabelText, getByLabelText, getByText } = render(MemoryReview);

    expect(queryAllByLabelText('Memory Details')).toHaveLength(0);

    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);

    getByLabelText('Memory Details');
  });

  it('should have a button for showing the memory details.', () => {
    const { getByText } = render(MemoryReview);

    getByText(showMemoryDetailsButtonText);
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
