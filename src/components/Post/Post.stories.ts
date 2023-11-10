import type { Meta, StoryObj } from '@storybook/react';

import Post from './Post';

const meta: Meta<typeof Post> = {
  title: 'Components/Post',
  tags: ['autodocs'],
  component: Post,
};

export default meta;

type Story = StoryObj<typeof Post>;

export const PostView: Story = {
  args: {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
};
