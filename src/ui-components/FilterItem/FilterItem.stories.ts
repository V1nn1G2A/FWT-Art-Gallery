import type { Meta, StoryObj } from '@storybook/react';

import FilterItem, { FilterItemProps } from './FilterItem';

const meta: Meta<typeof FilterItem> = {
  title: 'UI/FilterItem',
  component: FilterItem,
  tags: ['autodocs'],
} as Meta<FilterItemProps>;

export default meta;

export const Primary: StoryObj<FilterItemProps> = {
  args: {
    label: 'Filter Item',
    theme: 'light',
    onClick: () => {},
  },
};
