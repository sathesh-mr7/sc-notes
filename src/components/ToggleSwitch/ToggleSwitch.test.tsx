import { render, fireEvent, screen } from '@testing-library/react';
import ToggleSwitch from './ToggleSwitch';

describe('ToggleSwitch Component', () => {
  const setup = (isChecked: boolean) => {
    const onToggle = jest.fn();
    const utils = render(<ToggleSwitch id="test-toggle" isChecked={isChecked} onToggle={onToggle} />);
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    return {
      checkbox,
      onToggle,
      ...utils,
    };
  };

  test('renders correctly when checked', () => {
    const { checkbox } = setup(true);
    expect(checkbox).toBeChecked();
  });

  test('renders correctly when unchecked', () => {
    const { checkbox } = setup(false);
    expect(checkbox).not.toBeChecked();
  });

  test('calls onToggle with correct value when clicked', () => {
    const { checkbox, onToggle } = setup(false);
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledWith(true);
  });

  test('calls onToggle with correct value when clicked again', () => {
    const { checkbox, onToggle } = setup(true);
    fireEvent.click(checkbox);
    expect(onToggle).toHaveBeenCalledWith(false);
  });

  test('renders Dark label when checked', () => {
    const { getByText } = setup(true);
    expect(getByText('Dark')).toHaveClass('selected');
  });

  test('renders Light label when unchecked', () => {
    const { getByText } = setup(false);
    expect(getByText('Light')).toHaveClass('selected');
  });
});