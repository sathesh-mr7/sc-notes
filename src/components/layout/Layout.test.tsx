import { render, screen } from '@testing-library/react';
import Layout from './Layout';

it('should render children correctly', () => {
  render(<Layout><div>Test Child</div></Layout>);
  expect(screen.getByText('Test Child')).toBeInTheDocument();
});