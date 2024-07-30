import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<ButtonProps>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: false,
    theme: 'light',
  },
};
