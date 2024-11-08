import { render, screen } from '@testing-library/react';
import PortalRoot from './PortalRoot';
import { PORTAL_ROOT_ID } from '../../constants';

describe('PortalRoot', () => {
  it('should render without crashing', () => {
    const { container } = render(<PortalRoot />);
    expect(container).toBeInTheDocument();
  });

  it('should have the correct id', () => {
    render(<PortalRoot />);
    const portalRootElement = screen.getByTestId(PORTAL_ROOT_ID);
    expect(portalRootElement).toBeInTheDocument();
  });
});