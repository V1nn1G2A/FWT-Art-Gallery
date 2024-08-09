import type { Meta, StoryObj } from '@storybook/react';

import Link, { LinkProps } from './Link';

const meta: Meta<typeof Link> = {
  title: 'UI/Link',
  component: Link,
  tags: ['autodocs'],
} as Meta<LinkProps>;

export default meta;

export const Primary: StoryObj<LinkProps> = {
  args: {
    label: 'Normal Link',
    theme: 'light',
  },
};
