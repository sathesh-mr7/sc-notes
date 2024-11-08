import { render, screen } from '@testing-library/react';
import Portal from './Portal';
import { PORTAL_ROOT_ID } from '../../constants';

describe('Portal', () => {
  let portalRoot: HTMLElement;

  beforeAll(() => {
    portalRoot = document.createElement('div');
    portalRoot.id = PORTAL_ROOT_ID;
    document.body.appendChild(portalRoot);
  });

  afterAll(() => {
    document.body.removeChild(portalRoot);
  });

  it('renders children into the portal root', () => {
    render(
      <Portal>
        <div>Portal Content</div>
      </Portal>
    );

    expect(screen.getByText('Portal Content')).toBeInTheDocument();
  });

  it('returns null if portal root is not found', () => {
    document.body.removeChild(portalRoot);

    render(
      <Portal>
        <div>Portal Content</div>
      </Portal>
    );

    expect(screen.queryByText('Portal Content')).toBeNull();

    document.body.appendChild(portalRoot); // Restore portal root for other tests
  });
});