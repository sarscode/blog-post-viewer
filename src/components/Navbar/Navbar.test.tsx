import Navbar from './Navbar';
import { getTestLayout } from 'utils/test.utils';
import { render } from '@testing-library/react';

it('should render Navbar without crashing', () => {
  const navbar = getTestLayout(<Navbar />, 'react-router');
  const { container } = render(navbar);

  expect(container).toBeInTheDocument();
});
