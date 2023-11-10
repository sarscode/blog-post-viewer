import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Typography/Text',
  tags: ['autodocs'],
  component: Text,
};

export default meta;

type Story = StoryObj<typeof Text>;

export const ParagaphText: Story = {
  args: {
    element: 'p',
    size: 'base',
    children:
      'This component is used to render a text in a <p></p>, <span></span>, and <small></small>',
  },
};

export const SpanText: Story = {
  args: {
    element: 'span',
    size: 'base',
    children:
      'This component is used to render a text in a <p></p>, <span></span>, and <small></small>',
  },
};

export const SmallText: Story = {
  args: {
    element: 'small',
    size: 'base',
    children:
      'This component is used to render a text in a <p></p>, <span></span>, and <small></small>',
  },
};
