import type { Meta, StoryObj } from '@storybook/react';

import Textarea, { TextareaProps } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'UI/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} as Meta<TextareaProps>;

export default meta;

export const Primary: StoryObj<TextareaProps> = {
  args: {
    label: 'Textarea',
    theme: 'light',
  },
};
