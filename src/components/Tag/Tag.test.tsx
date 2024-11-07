import { render, screen } from '@testing-library/react';
import Tag from './Tag';

describe('Tag Component', () => {
  it('renders with default color', () => {
    render(<Tag text="Default Tag" />);
    const tagElement = screen.getByText(/Default Tag/i);
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('gray');
  });

  it('renders with specified color', () => {
    render(<Tag color="red" text="Red Tag" />);
    const tagElement = screen.getByText(/Red Tag/i);
    expect(tagElement).toBeInTheDocument();
    expect(tagElement).toHaveClass('red');
  });

  it('renders with different colors', () => {
    const colors = ['blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'gray'] as const;
    colors.forEach(color => {
      render(<Tag color={color} text={`${color} Tag`} />);
      const tagElement = screen.getByText(new RegExp(`${color} Tag`, 'i'));
      expect(tagElement).toBeInTheDocument();
      expect(tagElement).toHaveClass(color);
    });
  });

  it('renders with correct text', () => {
    render(<Tag color="blue" text="Blue Tag" />);
    const tagElement = screen.getByText(/Blue Tag/i);
    expect(tagElement).toBeInTheDocument();
  });
});