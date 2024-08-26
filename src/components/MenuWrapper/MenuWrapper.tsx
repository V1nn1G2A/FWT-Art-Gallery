import React from 'react';

import useOutsideClick from '../../hooks/useOutsideClick';
import useNoScroll from '../../hooks/useNoScroll';
import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import styles from './menuWrapper.module.scss';

import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';
import ButtonText from '../../ui-components/ButtonText/ButtonText';
import AuthMenuLinks from '../AuthMenuLinks/AuthMenuLinks';

import ThemeIcon from '../../assets/icons/ThemeIcon';
import Close from '../../assets/icons/Close';

interface MenuWrapperProps {
  theme: 'light' | 'dark';
  active: boolean;
  onClick: () => void;
}

const MenuWrapper: React.FC<MenuWrapperProps> = ({
  theme,
  active,
  onClick,
}: MenuWrapperProps) => {
  const { toggleTheme } = useThemeContext();
  const menuRef = useOutsideClick(onClick);
  useNoScroll(active);

  const checkWindowSize = () => {
    if (window.innerWidth > 1024 && active) {
      onClick();
    }
  };

  window.addEventListener('resize', checkWindowSize);

  return (
    <div
      className={`${styles.menuWrapper} ${styles[`menuWrapper--${theme}`]} ${styles[`menuWrapper${active ? '--active' : ''}`]}`}
    >
      <div
        ref={menuRef}
        className={`${styles.menuWrapper_inner} ${styles[`menuWrapper_inner--${theme}`]}`}
      >
        <ButtonIcon
          variant="transparent"
          onClick={() => {
            onClick();
          }}
          theme={theme}
          icon={<Close />}
        />
        <div className={styles.menuWrapper_buttons}>
          <ButtonIcon
            variant="themeButton"
            onClick={toggleTheme}
            theme={theme}
            icon={<ThemeIcon />}
          />
          <ButtonText
            variant="text"
            onClick={toggleTheme}
            theme={theme}
            label={`${theme === 'light' ? 'DARK' : 'LIGHT'} MODE`.toUpperCase()}
          />
        </div>
        <AuthMenuLinks theme={theme} />
      </div>
    </div>
  );
};

export default MenuWrapper;
