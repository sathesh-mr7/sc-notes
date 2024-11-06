import { render, screen } from '@testing-library/react';
import SidePanel from './SidePanel';

  test('SidePanel component renders children correctly', () => {
    render(<SidePanel>Test Content</SidePanel>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });