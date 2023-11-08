import { render, screen } from '@testing-library/react';

import Heading from './Heading';

it('should heading with textContent without crashing', () => {
  const text = 'This is a heading';
  const { container } = render(<Heading>{text}</Heading>);

  expect(container).toBeInTheDocument();
  expect(container).not.toBeEmptyDOMElement();
  expect(container).toHaveTextContent(text);
});

it('should render heading level 2 by default', () => {
  const text = 'This is a heading';
  const { container } = render(<Heading>{text}</Heading>);

  const headingLevelTwo = screen.getByRole('heading', { level: 2 });

  expect(container).toBeInTheDocument();
  expect(headingLevelTwo).toBeInTheDocument();
});

it('should render heading level 1 if level prop is h1', () => {
  const text = 'This is a heading';
  const { container } = render(<Heading level="h1">{text}</Heading>);

  const headingLevelOne = screen.getByRole('heading', { level: 1 });

  expect(container).toBeInTheDocument();
  expect(headingLevelOne).toBeInTheDocument();
});

it('should render heading level 3 if level prop is h3', () => {
  const text = 'This is a heading';
  const { container } = render(<Heading level="h3">{text}</Heading>);

  const headingLevelThree = screen.getByRole('heading', { level: 3 });

  expect(container).toBeInTheDocument();
  expect(headingLevelThree).toBeInTheDocument();
});
