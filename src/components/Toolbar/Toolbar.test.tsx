import { render, fireEvent, screen } from '@testing-library/react';
import Toolbar from './Toolbar';
import { ThemeContext } from '../../store/themeContext';

describe('Toolbar Component', () => {
  const mockOnOptionsChange = jest.fn();

  const renderToolbar = (isDarkMode = false) => {
    return render(
      <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode: jest.fn() }}>
        <Toolbar onOptionsChange={mockOnOptionsChange} />
      </ThemeContext.Provider>
    );
  };

  beforeEach(() => {
    mockOnOptionsChange.mockClear();
  });

  test('should render Toolbar component', () => {
    renderToolbar();
    expect(screen.getByTestId('bold-text')).toBeInTheDocument();
    expect(screen.getByTestId('italic-text')).toBeInTheDocument();
    expect(screen.getByTestId('underline-text')).toBeInTheDocument();
  });

  test('should toggle bold option', () => {
    renderToolbar();
    const boldCheckbox = screen.getByTestId('bold-text');
    fireEvent.click(boldCheckbox);
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ bold: true }));
    fireEvent.click(boldCheckbox);
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ bold: false }));
  });

  test('should toggle italic option', () => {
    renderToolbar();
    const italicCheckbox = screen.getByTestId('italic-text');
    fireEvent.click(italicCheckbox);
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ italic: true }));
    fireEvent.click(italicCheckbox);
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ italic: false }));
  });

  test('should toggle underline option', () => {
    renderToolbar();
    const underlineCheckbox = screen.getByTestId('underline-text');
    fireEvent.click(underlineCheckbox);
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ underline: true }));
    fireEvent.click(underlineCheckbox);
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ underline: false }));
  });

  test('should change font size option', () => {
    renderToolbar();
    const fontSizeSelect = screen.getByTestId('font-size');
    fireEvent.change(fontSizeSelect, { target: { value: '16' } });
    expect(mockOnOptionsChange).toHaveBeenCalledWith(expect.objectContaining({ fontSize: 16 }));
  });
});