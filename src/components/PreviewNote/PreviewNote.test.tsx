import { render, screen } from '@testing-library/react';
import PreviewNote from './PreviewNote';
import sanitizeHtml from 'sanitize-html';

jest.mock('sanitize-html', () => jest.fn((input) => input));

describe('PreviewNote', () => {
  const note = {
    id: '1',
    title: 'Test Note',
    content: '<p>This is a test note content</p>',
    createdAt: 'Mar 1, 2024',
    updatedAt: 'Mar 1, 2024',
    tag: {
      color: 'blue' as TagColor,
      text: 'Test Tag',
    },
  };

  it('renders the note title', () => {
    render(<PreviewNote note={note} />);
    expect(screen.getByText('Test Note')).toBeInTheDocument();
  });

  it('renders the sanitized note content', () => {
    render(<PreviewNote note={note} />);
    expect(sanitizeHtml).toHaveBeenCalledWith(note.content);
  });

  it('renders the note created date', () => {
    render(<PreviewNote note={note} />);
    expect(screen.getByText('Mar 1, 2024')).toBeInTheDocument();
  });

  it('renders the tag if present', () => {
    render(<PreviewNote note={note} />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('does not render the tag if not present', () => {
    const noteWithoutTag = { ...note, tag: undefined };
    render(<PreviewNote note={noteWithoutTag} />);
    expect(screen.queryByText('Test Tag')).not.toBeInTheDocument();
  });
});