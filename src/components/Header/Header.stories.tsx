import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
} as Meta<typeof Header>;

export default meta;

export const Primary: StoryObj<typeof Header> = {
  args: {
    theme: 'light',
  },
};
