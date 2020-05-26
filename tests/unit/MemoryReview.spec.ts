import { render, fireEvent } from '@testing-library/vue';
import MemoryReview from '@/components/MemoryReview.vue';
import * as MemoryService from '@/services/MemoryService';
import MemoryRecordReview from '@/models/MemoryRecordReview';
import MemoryRecord from '@/models/MemoryRecord';

const showMemoryDetailsButtonText = 'Show Memory Details';
// This array will be consumed within the component.
// Copy it at the call site so that the tests use the copy and not the original array.
const testMemoryRecordReview = [
  new MemoryRecordReview(
    new MemoryRecord('this is the prompt', 'these are the details'),
  ),
  new MemoryRecordReview(
    new MemoryRecord('This is the second memory prompt.', 'These are the second memory details'),
  ),
];

describe('The MemoryReview component', () => {
  describe('should show the Congratulations view when there are no more MemoryRecordReviews', () => {
    it('and the Quick resolution button is clicked.', async () => {
      jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
      const { getByText, getByLabelText } = render(MemoryReview);

      const promptText = getByLabelText('Prompt');
      expect(promptText.textContent).toEqual('this is the prompt');

      const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
      await fireEvent.click(memoryDetailsButton);
      const resolutionButton = getByText('Quick');
      await fireEvent.click(resolutionButton);

      await fireEvent.click(memoryDetailsButton);
      await fireEvent.click(resolutionButton);

      getByText('Congratulations');
    });

    it('and the A little slow resolution button is clicked.', async () => {
      jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
      const { getByText, getByLabelText } = render(MemoryReview);

      const promptText = getByLabelText('Prompt');
      expect(promptText.textContent).toEqual('this is the prompt');

      const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
      await fireEvent.click(memoryDetailsButton);
      const resolutionButton = getByText('A little slow');
      await fireEvent.click(resolutionButton);

      await fireEvent.click(memoryDetailsButton);
      await fireEvent.click(resolutionButton);

      getByText('Congratulations');
    });

    it('and the Took too long resolution button is clicked.', async () => {
      jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
      const { getByText, getByLabelText } = render(MemoryReview);

      const promptText = getByLabelText('Prompt');
      expect(promptText.textContent).toEqual('this is the prompt');

      const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
      await fireEvent.click(memoryDetailsButton);
      const resolutionButton = getByText('Took too long');
      await fireEvent.click(resolutionButton);

      await fireEvent.click(memoryDetailsButton);
      await fireEvent.click(resolutionButton);

      getByText('Congratulations');
    });
  });

  it('should show the second Memory prompt when the Quick resolution button is clicked.', async () => {
    jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
    const { getByText, getByLabelText } = render(MemoryReview);

    const promptText = getByLabelText('Prompt');
    expect(promptText.textContent).toEqual('this is the prompt');

    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);
    const resolutionButton = getByText('Quick');
    await fireEvent.click(resolutionButton);

    const secondPromptText = getByLabelText('Prompt');
    expect(secondPromptText.textContent).toEqual('This is the second memory prompt.');
  });

  it('should show the second Memory prompt when the A little slow resolution button is clicked.', async () => {
    jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
    const { getByText, getByLabelText } = render(MemoryReview);

    const promptText = getByLabelText('Prompt');
    expect(promptText.textContent).toEqual('this is the prompt');

    const memoryDetailsButton = getByText(showMemoryDetailsButtonText);
    await fireEvent.click(memoryDetailsButton);
    const resolutionButton = getByText('A little slow');
    await fireEvent.click(resolutionButton);

    const secondPromptText = getByLabelText('Prompt');
    expect(secondPromptText.textContent).toEqual('This is the second memory prompt.');
  });

  it('should show the second Memory prompt when the Took too long resolution button is clicked.', async () => {
    jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
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

  it('should show the prompt text of the first memory when memories exist.', () => {
    jest.spyOn(MemoryService, 'getMemories').mockImplementation(() => [...testMemoryRecordReview]);
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
