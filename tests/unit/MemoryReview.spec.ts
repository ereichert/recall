import { render } from '@testing-library/vue';
import MemoryReview from '@/components/MemoryReview.vue';

describe('The MemoryReview component', () => {
  it('should show the first Prompt when Memories exist.', () => {
    const { getByText } = render(MemoryReview);

    getByText('Prompt');
  });

  it('should render.', () => {
    render(MemoryReview);
  });
});
