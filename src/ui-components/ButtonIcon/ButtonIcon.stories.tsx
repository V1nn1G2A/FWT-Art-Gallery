import type { Meta, StoryObj } from '@storybook/react';

import ButtonIcon, { ButtonIconProps } from './ButtonIcon';

import { ThemeProvider } from '../../hooks/useTheme/ThemeContext';

import BasketDefault from '../../assets/icons/BasketDefault';
import ArrowDefault from '../../assets/icons/ArrowDefault';
import ThemeIcon from '../../assets/icons/ThemeIcon';
import Burger from '../../assets/icons/Burger';

const meta: Meta<typeof ButtonIcon> = {
  title: 'UI/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
} as Meta<ButtonIconProps>;

export default meta;

export const Basket: StoryObj<ButtonIconProps> = {
  args: {
    variant: 'basket',
    theme: 'light',
    icon: <BasketDefault />,
  },
};

export const Arrow: StoryObj<ButtonIconProps> = {
  args: {
    variant: 'arrow',
    theme: 'light',
    icon: <ArrowDefault />,
  },
};

export const ThemeButton: StoryObj<ButtonIconProps> = {
  args: {
    variant: 'themeButton',
    theme: 'light',
    icon: (
      <ThemeProvider>
        <ThemeIcon />
      </ThemeProvider>
    ),
  },
};

export const Transparent: StoryObj<ButtonIconProps> = {
  args: {
    variant: 'transparent',
    theme: 'light',
    icon: <Burger />,
  },
};
