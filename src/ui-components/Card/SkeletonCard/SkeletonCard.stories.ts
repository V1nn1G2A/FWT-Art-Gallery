import type { Meta, StoryObj } from '@storybook/react';

import SkeletonCard from './SkeletonCard';

const meta: Meta<typeof SkeletonCard> = {
  title: 'UI/SkeletonCard',
  component: SkeletonCard,
  tags: ['autodocs'],
} as Meta<typeof SkeletonCard>;

export default meta;

export const Primary: StoryObj<typeof SkeletonCard> = {
  args: {},
};
