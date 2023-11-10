import { render, screen } from '@testing-library/react';

import Text from './Text';

it('should Text with textContent without crashing', () => {
  const text = 'This is a Text';
  const { container } = render(<Text>{text}</Text>);

  expect(container).toBeInTheDocument();
  expect(container).not.toBeEmptyDOMElement();
  expect(container).toHaveTextContent(text);
});

it('should render Text a <p></p> by default', () => {
  const text = 'This is a Text';
  const { container } = render(<Text element="p">{text}</Text>);
  const paragraphElement = screen.getByText(text);

  expect(container).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});

it('should render Text as <span></span> if element prop is span', () => {
  const text = 'This is a Text';
  const { container } = render(<Text element="span">{text}</Text>);
  const element = screen.getByText(text);

  expect(container).toBeInTheDocument();
  expect(element.tagName).toBe('SPAN');
});

it('should render Text as <small></small> if element prop is small', () => {
  const text = 'This is a Text';
  const { container } = render(<Text element="small">{text}</Text>);
  const element = screen.getByText(text);

  expect(container).toBeInTheDocument();
  expect(element.tagName).toBe('SMALL');
});
