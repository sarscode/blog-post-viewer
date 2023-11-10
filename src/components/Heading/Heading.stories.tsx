import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingOne: Story = {
  args: {
    level: 'h1',
    children: 'This is heading one - h1',
  },
};

export const HeadingTwo: Story = {
  args: {
    level: 'h2',
    children: 'This is heading two - h2',
  },
};

export const HeadingThree: Story = {
  args: {
    level: 'h3',
    children: 'This is heading three - h3',
  },
};
