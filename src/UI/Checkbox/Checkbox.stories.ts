import type { Meta, StoryObj } from '@storybook/react';

import Checkbox, { CheckboxProps } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<CheckboxProps>;

export default meta;

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    theme: 'light',
    active: false,
  },
};
