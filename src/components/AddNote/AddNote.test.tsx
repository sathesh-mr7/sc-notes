import { render, screen, fireEvent } from '@testing-library/react';
import { RootState } from '../../store/reduxStore';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import AddNote from './AddNote';

// Mock the crypto module
global.crypto = {
  getRandomValues: (arr: Uint8Array) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Math.floor(Math.random() * 256);
    }
    return arr;
  },
  randomUUID: () => `${1e7}-${1e3}-${4e3}-${8e3}-${1e11}`,
  subtle: {} as SubtleCrypto,
};

const mockStore = configureStore([]);
const initialState: RootState = {
  folders: [],
  notes: [],
  trash: [],
  showModal: { modalId: "", visible: false },
};

describe('AddNote Component', () => {
  let store = mockStore(initialState);
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useLocation: () => ({
        pathname: '/',
      }),
    }));
  });
  test('renders AddNote component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddNote onClose={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Add New Note/i)).toBeInTheDocument();
  });

  test('renders Edit Note when note prop is provided', () => {
    const note = { id: '1', title: 'Test Note', content: 'Test Content', createdAt: '2023-01-01', updatedAt: '2023-01-01' };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddNote note={note} onClose={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Edit This Note/i)).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();

    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddNote onClose={onCloseMock} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /Cancel/i }));
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('displays error when trying to save without content', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AddNote onClose={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /Save/i }));
    expect(screen.getByPlaceholderText(/Enter Note/i)).toHaveClass('error');
  });

  test('restores note from trash', () => {
    const note = { id: '1', title: 'Test Note', content: 'Test Content', createdAt: '2023-01-01', updatedAt: '2023-01-01' };
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/trash']}>
          <AddNote note={note} onClose={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId('restore-button'));
    expect(store.getActions()).toContainEqual({ type: 'notes/addNote', payload: note });
  });

  test('deletes note from trash', () => {
    const note = { id: '1', title: 'Test Note', content: 'Test Content', createdAt: '2023-01-01', updatedAt: '2023-01-01' };
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/trash']}>
          <AddNote note={note} onClose={jest.fn()} />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId('delete-button'));
    expect(store.getActions()).toContainEqual({ type: 'trashNotes/deleteFromTrash', payload: note.id });
  });
});