import { render } from '@testing-library/vue';
import ActionMenu from '@/components/ActionMenu.vue';

describe('The ActionMenu component', () => {
  it('should have an Edit Memories action.', () => {
    const { getByText } = render(ActionMenu);

    getByText('Edit Memories');
  });

  it('should have an Review Memories action.', () => {
    const { getByText } = render(ActionMenu);

    getByText('Review Memories');
  });

  it('should have an AddMemory action.', () => {
    const { getByText } = render(ActionMenu);

    getByText('Add Memory');
  });

  it('The ActionMenu view should render.', () => {
    render(ActionMenu);
  });
});
