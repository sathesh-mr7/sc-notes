import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DeleteNote from './DeleteNote';
import { showModal } from '../../store/modalSlice';
import { CONFIRM_MODAL_ID } from '../../constants';

const mockStore = configureStore([]);
const note = { id: '1', content: 'Test Note', createdAt: 'Jan 23, 2025', title: 'Test Title' } as Note;

describe('DeleteNote Component', () => {
  let store: any;
  let onDeleteMock: jest.Mock;

  beforeEach(() => {
    store = mockStore({});
    onDeleteMock = jest.fn();
  });

  test('renders children correctly', () => {
    render(
      <Provider store={store}>
        <DeleteNote note={note} onDelete={onDeleteMock}>
          <span>Delete</span>
        </DeleteNote>
      </Provider>
    );
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  test('calls onDelete and dispatches showModal on click', () => {
    render(
      <Provider store={store}>
        <DeleteNote note={note} onDelete={onDeleteMock}>
          <span>Delete</span>
        </DeleteNote>
      </Provider>
    );

    fireEvent.click(screen.getByText('Delete'));

    expect(onDeleteMock).toHaveBeenCalledWith(note);
    const actions = store.getActions();
    expect(actions).toEqual([showModal(CONFIRM_MODAL_ID)]);
  });
});