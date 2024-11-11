import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from './Logo';
import { ThemeContext } from '../../store/themeContext';

describe('Logo Component', () => {
  it('should render light mode logo when isDarkMode is false', () => {
    const themeContextValue = { isDarkMode: false, toggleDarkMode: jest.fn() };
    render(
      <ThemeContext.Provider value={themeContextValue}>
        <Router>
          <Logo />
        </Router>
      </ThemeContext.Provider>
    );
    expect(screen.getByAltText('logo').getAttribute('src')).toBe('light-mode-logo.png');
  });

  it('should render dark mode logo when isDarkMode is true', () => {
    const themeContextValue = { isDarkMode: true, toggleDarkMode: jest.fn() };
    render(
      <ThemeContext.Provider value={themeContextValue}>
        <Router>
          <Logo />
        </Router>
      </ThemeContext.Provider>
    );
    expect(screen.getByAltText('logo').getAttribute('src')).toBe('dark-mode-logo.png');
  });

  it('should have the correct link to the home page', () => {
    const themeContextValue = { isDarkMode: false, toggleDarkMode: jest.fn() };
    render(
      <ThemeContext.Provider value={themeContextValue}>
        <Router>
          <Logo />
        </Router>
      </ThemeContext.Provider>
    );
    const link = screen.getByRole('link');
    expect(link?.getAttribute('href')).toBe('/');
  });
});