import useOutsideClick from '../../hooks/useOutsideClick';
import useNoScroll from '../../hooks/useNoScroll';
import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import styles from './menuWrapper.module.scss';

import Menu from '../../UI/Menu/Menu';
import ButtonIcon from '../../UI/ButtonIcon/ButtonIcon';
import ButtonText from '../../UI/ButtonText/ButtonText';

import ThemeIcon from '../../assets/icons/ThemeIcon';
import Close from '../../assets/icons/Close';

interface MenuWrapperProps {
  theme: 'light' | 'dark';
  active: boolean;
  onClick: () => void;
}

function MenuWrapper({ theme, active, onClick }: MenuWrapperProps) {
  const { toggleTheme } = useThemeContext();
  const menuRef = useOutsideClick(onClick);

  useNoScroll(active);

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
        <ButtonText
          variant="text"
          onClick={toggleTheme}
          theme={theme}
          label={`${theme === 'light' ? 'DARK' : 'LIGHT'} MODE`.toUpperCase()}
          icon={
            <ButtonIcon
              variant="themeButton"
              onClick={toggleTheme}
              theme={theme}
              icon={<ThemeIcon theme={theme} />}
            />
          }
        />

        <Menu theme={theme} label="Log in" />
        <Menu theme={theme} label="Sign up" />
      </div>
    </div>
  );
}

export default MenuWrapper;
