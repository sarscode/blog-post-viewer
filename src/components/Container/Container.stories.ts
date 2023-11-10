import type { Meta, StoryObj } from '@storybook/react';

import ContainerComponent from './Container';

const meta: Meta<typeof ContainerComponent> = {
  title: 'Layout/Container',
  component: ContainerComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ContainerComponent>;

export const Container: Story = {
  args: {
    children:
      'This is div to wrap children, fixing the children width to the current breakpoint. Automatically adds margin left and right by default',
  },
};
