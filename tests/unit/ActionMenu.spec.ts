import { render, ComponentHarness, fireEvent } from '@testing-library/vue';
import ActionMenu from '@/components/ActionMenu.vue';
import { routes } from '@/router';
import App from '@/App.vue';

const renderActionMenu = (): ComponentHarness => render(ActionMenu, { routes });
const editMemoriesText = 'Edit Memories';
const reviewMemoriesText = 'Memory Review';
const addMemoryText = 'Add Memory';

describe('The ActionMenu component', () => {
  it('should display the Edit Memories page when the Edit Memories action is clicked.', async () => {
    const { getAllByText } = render(App, { routes });
    const foundEditMemories = getAllByText(editMemoriesText);

    expect(getAllByText(editMemoriesText).length).toEqual(1);

    await fireEvent.click(foundEditMemories[0]);

    expect(getAllByText(editMemoriesText).length).toEqual(2);
  });

  it('should display the Review Memories page when the Review Memories action is clicked.', async () => {
    const { getAllByText } = render(App, { routes });
    const reviewEditMemories = getAllByText(reviewMemoriesText);

    expect(getAllByText(reviewMemoriesText).length).toEqual(1);

    await fireEvent.click(reviewEditMemories[0]);

    expect(getAllByText(reviewMemoriesText).length).toEqual(2);
  });

  it('should display the Add Memory page when the Add Memories action is clicked.', async () => {
    const { getAllByText } = render(App, { routes });
    const foundAddMemories = getAllByText(addMemoryText);

    expect(getAllByText(addMemoryText).length).toEqual(1);

    await fireEvent.click(foundAddMemories[0]);

    expect(getAllByText(addMemoryText).length).toEqual(2);
  });

  it('should have an Edit Memories action.', () => {
    const { getByText } = renderActionMenu();

    getByText(editMemoriesText);
  });

  it('should have an Review Memories action.', () => {
    const { getByText } = renderActionMenu();

    getByText(reviewMemoriesText);
  });

  it('should have an AddMemory action.', () => {
    const { getByText } = renderActionMenu();

    getByText(addMemoryText);
  });

  it('The ActionMenu view should render.', () => {
    renderActionMenu();
  });
});
