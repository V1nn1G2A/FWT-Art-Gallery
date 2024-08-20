import type { Meta, StoryObj } from '@storybook/react';

import CardList, { CardListProps } from './CardList';

import type { CardProps } from '../Card/Card';

const meta: Meta<typeof CardList> = {
  title: 'UI/CardList',
  component: CardList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardListProps>;

// тестовые пропсы, удалить при подключении запросов
const defaultProps: CardProps = {
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
  onClick: () => {},
  theme: 'light',
};

export const Primary: Story = {
  args: {
    cards: [defaultProps, defaultProps, defaultProps, defaultProps],
  },
};

export const NoMatching: Story = {
  args: {
    cards: [],
  },
};
