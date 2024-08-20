import type { Meta, StoryObj } from '@storybook/react';

import Logo, { LogoProps } from './Logo';

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodocs'],
} as Meta<LogoProps>;

export default meta;

export const Primary: StoryObj<LogoProps> = {
  args: {
    theme: 'light',
  },
};
