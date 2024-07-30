import type { Meta, StoryObj } from '@storybook/react';

import PictureList, { PictureListProps } from './PictureList';

import type { PictureCardProps } from '../PictureCard/PictureCard';

const meta: Meta<typeof PictureList> = {
  title: 'Components/PictureList',
  component: PictureList,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PictureListProps>;

// тестовые пропсы, удалить при подключении запросов
const defaultProps: PictureCardProps = {
  title: 'The ninth wave',
  subTitle: '1703',
  image: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
  onClick: () => {},
  theme: 'light',
};

export const Primary: Story = {
  args: {
    pictures: [defaultProps, defaultProps, defaultProps, defaultProps],
  },
};

export const NoMatching: Story = {
  args: {
    pictures: [],
  },
};
