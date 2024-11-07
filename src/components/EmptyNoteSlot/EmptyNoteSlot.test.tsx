import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import EmptyNoteSlot from './EmptyNoteSlot';

describe('EmptyNoteSlot', () => {
  it('should render correctly', () => {
    render(<EmptyNoteSlot onClick={() => {}} />);
    expect(screen.getByText('Add note')).toBeInTheDocument();
    expect(screen.getByAltText('+')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<EmptyNoteSlot onClick={handleClick} />);
    fireEvent.click(screen.getByText('Add note'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});