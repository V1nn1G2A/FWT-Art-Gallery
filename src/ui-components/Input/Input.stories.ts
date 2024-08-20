import type { Meta, StoryObj } from '@storybook/react';

import Input, { InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
} as Meta<InputProps>;

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'placeholder',
    theme: 'light',
  },
};

export const Error: StoryObj<InputProps> = {
  args: {
    placeholder: 'placeholder',
    theme: 'light',
    error: 'Error message',
  },
};
