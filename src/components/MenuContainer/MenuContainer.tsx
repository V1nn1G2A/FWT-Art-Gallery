import React from 'react';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import styles from './menuContainer.module.scss';

import AuthMenuLinks from '../AuthMenuLinks/AuthMenuLinks';
import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';

import ThemeIcon from '../../assets/icons/ThemeIcon';

export interface MenuContainerProps {
  theme?: 'light' | 'dark';
}

const MenuContainer: React.FC<MenuContainerProps> = ({
  theme,
}: MenuContainerProps) => {
  const { toggleTheme } = useThemeContext();

  return (
    <div className={styles.menuContainer}>
      <nav className={styles.menuContainer_inner}>
        <AuthMenuLinks theme={theme} />
        <ButtonIcon
          variant="themeButton"
          onClick={toggleTheme}
          theme={theme}
          icon={<ThemeIcon />}
        />
      </nav>
    </div>
  );
};

export default MenuContainer;
