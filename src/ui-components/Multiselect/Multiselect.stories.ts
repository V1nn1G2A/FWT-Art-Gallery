import type { Meta, StoryObj } from '@storybook/react';

import Multiselect, { MultiselectProps } from './Multiselect';

const meta: Meta<typeof Multiselect> = {
  title: 'UI/Multiselect',
  component: Multiselect,
  tags: ['autodocs'],
} as Meta<MultiselectProps>;

export default meta;

export const Primary: StoryObj<MultiselectProps> = {
  args: {
    label: 'Multiselect',
    theme: 'light',
  },
};
