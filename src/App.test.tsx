import { render, screen } from '@testing-library/react';

import App from './App';

test('PostViewer Text', () => {
  render(<App />);
  const headingElement = screen.getByText(/PostViewer/i);
  expect(headingElement).toBeInTheDocument();
});
