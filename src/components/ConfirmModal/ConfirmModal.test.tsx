import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConfirmModal from './ConfirmModal';

describe('ConfirmModal', () => {
  const defaultProps = {
    confirmText: 'Confirm',
    isOpen: true,
    message: 'Are you sure?',
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    title: 'Confirmation',
  };

  it('renders correctly when open', () => {
    render(<ConfirmModal {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.message)).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText(defaultProps.confirmText)).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onClose when the cancel button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('calls onConfirm when the confirm button is clicked', () => {
    render(<ConfirmModal {...defaultProps} />);
    fireEvent.click(screen.getByText(defaultProps.confirmText));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });
});