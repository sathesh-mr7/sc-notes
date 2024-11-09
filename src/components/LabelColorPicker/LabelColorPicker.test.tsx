import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LabelColorPicker from './LabelColorPicker';

describe('LabelColorPicker', () => {
  const onColorPickMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders all color buttons', () => {
    render(<LabelColorPicker onColorPick={onColorPickMock} />);
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'];

    colors.forEach(color => {
      expect(screen.getByTestId(color)).toBeInTheDocument();
    });
  });

  it('calls onColorPick with the correct color when a color button is clicked', () => {
    render(<LabelColorPicker onColorPick={onColorPickMock} />);
    const colorButton = screen.getByTestId('red');

    fireEvent.click(colorButton);

    expect(onColorPickMock).toHaveBeenCalledWith('red');
  });

  it('calls onColorPick with undefined when the reset button is clicked', () => {
    render(<LabelColorPicker onColorPick={onColorPickMock} />);
    const resetButton = screen.getByText('x');

    fireEvent.click(resetButton);

    expect(onColorPickMock).toHaveBeenCalledWith(undefined);
  });

  it('applies the selected class to the selected color button', () => {
    render(<LabelColorPicker onColorPick={onColorPickMock} selectedColor="blue" />);
    const selectedButton = screen.getByTestId('blue');

    expect(selectedButton).toHaveClass('selected');
  });
});