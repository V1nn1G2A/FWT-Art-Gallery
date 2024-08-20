import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    _id: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
    name: 'The ninth wave',
    yearOfCreation: '1703',
    image: {
      original: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
      _id: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
      src: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
      webp: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
      src2x: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
      webp2x: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
    },
  },
};
