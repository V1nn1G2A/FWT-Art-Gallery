import type { Meta, StoryObj } from '@storybook/react';

import ButtonText, { ButtonTextProps } from './ButtonText';

const meta: Meta<typeof ButtonText> = {
  title: 'UI/ButtonText',
  component: ButtonText,
  tags: ['autodocs'],
} as Meta<ButtonTextProps>;

export default meta;

type Story = StoryObj<typeof ButtonText>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'ButtonText',
    disabled: false,
    theme: 'light',
  },
};
