import { render, screen } from '@testing-library/react';
import Layover from './Layover';

describe('Layover Component', () => {
  it('should render without crashing', () => {
    render(<Layover />);
    const layoverElement = screen.getByTestId('layover-id');
    expect(layoverElement).toBeInTheDocument();
  });

  it('should have the correct class name', () => {
    render(<Layover />);
    const layoverElement = screen.getByTestId('layover-id');
    expect(layoverElement).toHaveClass('layover');
  });
  it('should handle onClick event', () => {
    const handleClick = jest.fn();
    render(<Layover onClick={handleClick} />);
    const layoverElement = screen.getByTestId('layover-id');
    layoverElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});