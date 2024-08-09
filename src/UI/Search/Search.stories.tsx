import type { Meta, StoryObj } from '@storybook/react';

import Search, { SearchProps } from './Search';

const meta: Meta<typeof Search> = {
  title: 'UI/Search',
  component: Search,
  tags: ['autodocs'],
} as Meta<SearchProps>;

export default meta;

export const Primary: StoryObj<SearchProps> = {
  args: {
    theme: 'light',
  },
};
