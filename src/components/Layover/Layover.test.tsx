import { render, screen } from '@testing-library/react';
import Layover from './Layover';
import { PORTAL_ROOT_ID } from '../../constants';

describe('Layover', () => {
  beforeAll(() => {
    const portalRoot = document.createElement('div');
    portalRoot.id = PORTAL_ROOT_ID;
    portalRoot.setAttribute('data-testid', PORTAL_ROOT_ID);
    document.body.appendChild(portalRoot);
  });

  afterAll(() => {
    const portalRoot = screen.getByTestId(PORTAL_ROOT_ID);
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it('renders children inside the portal', () => {
    render(
      <Layover>
        <div>Test Content</div>
      </Layover>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('returns null if portal root is not found', () => {
    const portalRoot = screen.getByTestId(PORTAL_ROOT_ID);
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }

    render(
      <Layover>
        <div>Test Content</div>
      </Layover>
    );

    expect(screen.queryByText('Test Content')).toBeNull();
  });
});