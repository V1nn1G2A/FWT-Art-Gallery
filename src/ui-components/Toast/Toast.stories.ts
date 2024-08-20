import type { Meta, StoryObj } from '@storybook/react';

import Toast, { ToastProps } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'UI/Toast',
  component: Toast,
  tags: ['autodocs'],
} as Meta<ToastProps>;

export default meta;

export const Primary: StoryObj<ToastProps> = {
  args: {
    error: 'Toast',
    theme: 'light',
  },
};
