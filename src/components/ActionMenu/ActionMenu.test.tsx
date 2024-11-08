import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActionMenu from './ActionMenu';

describe('ActionMenu Component', () => {
  const actions = ['Edit', 'Delete', 'Share'];
  const onClickMock = jest.fn();

  test('renders all actions', () => {
    render(<ActionMenu actions={actions} onClick={onClickMock} />);
    actions.forEach(action => {
      expect(screen.getByText(action)).toBeInTheDocument();
    });
  });

  test('calls onClick with correct action', () => {
    render(<ActionMenu actions={actions} onClick={onClickMock} />);
    const actionItem = screen.getByText('Edit');
    fireEvent.click(actionItem);
    expect(onClickMock).toHaveBeenCalledWith(expect.any(Object), 'Edit');
  });

  test('applies custom className', () => {
    const customClass = 'custom-class';
    render(<ActionMenu actions={actions} onClick={onClickMock} className={customClass} />);
    const ulElement = screen.getByRole('list');
    expect(ulElement).toHaveClass(customClass);
  });
});