import Navbar from './Navbar';
import { render } from '@testing-library/react';

it('should render Navbar without crashing', () => {
  const { container } = render(<Navbar />);

  expect(container).toBeInTheDocument();
});
