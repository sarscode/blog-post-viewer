import Logo from './Logo';
import { render } from '@testing-library/react';

it('should render logo with crashing', () => {
  const { container } = render(<Logo />);
  expect(container).toBeInTheDocument();
});
