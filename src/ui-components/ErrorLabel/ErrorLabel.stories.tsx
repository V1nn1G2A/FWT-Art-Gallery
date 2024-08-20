import type { Meta, StoryObj } from '@storybook/react';

import ErrorLabel, { ErrorLabelProps } from './ErrorLabel';

const meta: Meta<typeof ErrorLabel> = {
  title: 'UI/ErrorLabel',
  component: ErrorLabel,
  tags: ['autodocs'],
} as Meta<ErrorLabelProps>;

export default meta;

export const Primary: StoryObj<ErrorLabelProps> = {
  args: {
    text: 'Error message',
    htmlFor: 'label',
  },
};
