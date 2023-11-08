import { render, screen } from '@testing-library/react';

import PostItem from './PostItem';

it('should render PostItem without crashing', () => {
  const props = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  const { container } = render(<PostItem {...props} />);
  expect(container).toBeInTheDocument();
});

it('should render PostItem with an article element', () => {
  const props = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  const { container } = render(<PostItem {...props} />);
  const articleElement = screen.getByRole('article');

  expect(container).toBeInTheDocument();
  expect(articleElement).toBeInTheDocument();
});

it('should render PostItem with the specified title prop', () => {
  const props = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  const { container } = render(<PostItem {...props} />);
  const title = screen.getByText(props.title);

  expect(container).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
