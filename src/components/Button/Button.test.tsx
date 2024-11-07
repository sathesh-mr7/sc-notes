import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders the button with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies the primary variant by default', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('primary');
  });

  it('applies the secondary variant when specified', () => {
    render(<Button variant="secondary">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('secondary');
  });

  it('applies the tertiary variant when specified', () => {
    render(<Button variant="tertiary">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('tertiary');
  });

  it('applies additional class names', () => {
    render(<Button className="extra-class">Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('extra-class');
  });

  it('passes other props to the button element', () => {
    render(<Button disabled>Click me</Button>);
    const button = screen.getByText('Click me');
    expect(button).toBeDisabled();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});