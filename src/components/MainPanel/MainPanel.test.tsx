import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPanel from './MainPanel';

it('MainPanel component renders children correctly', () => {
  render(
    <MainPanel>
      <div>Test Child</div>
    </MainPanel>
  );
  expect(screen.getByText('Test Child')).toBeInTheDocument();
});