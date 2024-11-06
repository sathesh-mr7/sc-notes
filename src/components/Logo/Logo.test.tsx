import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './Logo';
import { ThemeContext } from '../../store/themeContext';

test('Logo component renders light mode logo when isDarkMode is false', () => {
  const themeContextValue = { isDarkMode: false, toggleDarkMode: jest.fn() };
  render(
    <ThemeContext.Provider value={themeContextValue}>
      <Logo />
    </ThemeContext.Provider>
  );
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toHaveAttribute('src', 'light-mode-logo.png');
});

test('Logo component renders dark mode logo when isDarkMode is true', () => {
  const themeContextValue = { isDarkMode: true, toggleDarkMode: jest.fn() };;
  render(
    <ThemeContext.Provider value={themeContextValue}>
      <Logo />
    </ThemeContext.Provider>
  );
  const logoElement = screen.getByAltText('logo');
  expect(logoElement).toHaveAttribute('src', 'dark-mode-logo.png');
});