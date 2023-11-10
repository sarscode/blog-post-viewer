import { render, screen } from '@testing-library/react';

import Post from './Post';
import { getTestLayout } from 'utils/test.utils';

it('should render Post without crashing', () => {
  const props = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  const post = getTestLayout(<Post {...props} />, 'react-router');
  const { container } = render(post);
  expect(container).toBeInTheDocument();
});

it('should render Post with an article element', () => {
  const props = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  const post = getTestLayout(<Post {...props} />, 'react-router');
  const { container } = render(post);
  const articleElement = screen.getByRole('article');

  expect(container).toBeInTheDocument();
  expect(articleElement).toBeInTheDocument();
});

it('should render Post with the specified title prop', () => {
  const props = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  };
  const post = getTestLayout(<Post {...props} />, 'react-router');
  const { container } = render(post);
  const title = screen.getByText(props.title);

  expect(container).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
