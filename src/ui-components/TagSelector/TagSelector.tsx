import React from 'react';

import styles from './tagSelector.module.scss';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

import Clear from '../../assets/icons/ClearIcon';

export interface TagSelectorProps {
  text: string;
  variant?: 'text' | 'icon';
  onClick?: () => void;
  theme?: 'light' | 'dark';
}
const TagSelector: React.FC<TagSelectorProps> = ({
  text,
  variant,
  onClick,
  theme,
}: TagSelectorProps) => {
  return (
    <span
      className={`${styles.tagSelector} ${styles[`tagSelector--${theme}`]}`}
    >
      {text}
      {variant === 'icon' && onClick && (
        <ButtonIcon
          theme={theme}
          variant="transparent"
          icon={<Clear />}
          onClick={onClick}
        />
      )}
    </span>
  );
};

export default TagSelector;
