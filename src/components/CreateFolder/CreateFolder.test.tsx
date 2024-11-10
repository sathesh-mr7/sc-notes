import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CreateFolder from './CreateFolder';

const mockStore = configureStore([]);
const mockOnClose = jest.fn();

describe('CreateFolder Component', () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      folders: []
    });
    store.dispatch = jest.fn();
  });

  test('renders CreateFolder component', () => {
    render(
      <Provider store={store}>
        <CreateFolder onClose={mockOnClose} />
      </Provider>
    );

    expect(screen.getByText('Add Folder')).toBeInTheDocument();
    expect(screen.getByLabelText('Folder Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter Label Name')).toBeInTheDocument();
  });

  test('displays error when folder name is empty', () => {
    render(
      <Provider store={store}>
        <CreateFolder onClose={mockOnClose} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter Label Name'), { target: { value: '' } });
    fireEvent.click(screen.getByText('Create Folder'));

    expect(screen.getByText('Folder Name is required')).toBeInTheDocument();
  });

  test('displays error when folder name already exists', () => {
    store = mockStore({
      folders: [{ id: '1', name: 'Existing Folder', noteIds: [], createdAt: '', color: '' }]
    });

    render(
      <Provider store={store}>
        <CreateFolder onClose={mockOnClose} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Enter Label Name'), { target: { value: 'Existing Folder' } });
    fireEvent.click(screen.getByText('Create Folder'));

    expect(screen.getByText('Folder Name already exists')).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    render(
      <Provider store={store}>
        <CreateFolder onClose={mockOnClose} />
      </Provider>
    );

    fireEvent.click(screen.getByTestId('close-button'));

    expect(mockOnClose).toHaveBeenCalled();
  });
});