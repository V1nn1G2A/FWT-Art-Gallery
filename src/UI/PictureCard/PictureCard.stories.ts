import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import PictureCard from './PictureCard';

const meta: Meta<typeof PictureCard> = {
  title: 'Components/PictureCard',
  component: PictureCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof PictureCard>;

export const Primary: Story = {
  args: {
    title: 'The ninth wave',
    subTitle: '1703',
    image: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
    theme: 'light',
  },
};
