import type { Meta, StoryObj } from '@storybook/react';

import Menu, { MenuProps } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'UI/Menu',
  component: Menu,
  tags: ['autodocs'],
} as Meta<MenuProps>;

export default meta;

export const Primary: StoryObj<MenuProps> = {
  args: {
    label: 'Menu',
    theme: 'light',
  },
};
