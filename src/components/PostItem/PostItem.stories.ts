import type { Meta, StoryObj } from '@storybook/react';

import PostItem from './PostItem';

const meta: Meta<typeof PostItem> = {
  title: 'Components/PostItem',
  tags: ['autodocs'],
  component: PostItem,
};

export default meta;

type Story = StoryObj<typeof PostItem>;

export const PostListItem: Story = {
  args: {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
};
