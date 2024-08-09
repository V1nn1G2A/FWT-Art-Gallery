import type { Meta, StoryObj } from '@storybook/react';

import Label, { LabelProps } from './Label';

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  tags: ['autodocs'],
} as Meta<LabelProps>;

export default meta;

export const Primary: StoryObj<LabelProps> = {
  args: {
    text: 'Label',
    htmlFor: 'label',
    theme: 'light',
  },
};
