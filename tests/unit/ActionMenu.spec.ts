import { render, ComponentHarness } from '@testing-library/vue';
import ActionMenu from '@/components/ActionMenu.vue';
import { routes } from '@/router';

const renderActionMenu = (): ComponentHarness => render(ActionMenu, { routes });

describe('The ActionMenu component', () => {
  it('should have an Edit Memories action.', () => {
    const { getByText } = renderActionMenu();

    getByText('Edit Memories');
  });

  it('should have an Review Memories action.', () => {
    const { getByText } = renderActionMenu();

    getByText('Review Memories');
  });

  it('should have an AddMemory action.', () => {
    const { getByText } = renderActionMenu();

    getByText('Add Memory');
  });

  it('The ActionMenu view should render.', () => {
    renderActionMenu();
  });
});
