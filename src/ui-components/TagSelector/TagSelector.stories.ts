import type { Meta, StoryObj } from '@storybook/react';

import TagSelector, { TagSelectorProps } from './TagSelector';

const meta: Meta<typeof TagSelector> = {
  title: 'UI/TagSelector',
  component: TagSelector,
  tags: ['autodocs'],
} as Meta<TagSelectorProps>;

export default meta;

export const Primary: StoryObj<TagSelectorProps> = {
  args: {
    text: 'TagSelector',
    theme: 'light',
    onClick: () => {},
  },
};
