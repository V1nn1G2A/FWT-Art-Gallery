import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import styles from './menuContainer.module.scss';

import Menu from '../../ui-components/Menu/Menu';
import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';

import ThemeIcon from '../../assets/icons/ThemeIcon';

type Theme = 'light' | 'dark';

function MenuContainer({ theme }: { theme?: Theme }) {
  const { toggleTheme } = useThemeContext();

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuContainer_inner}>
        <Menu theme={theme} label="Log in" />
        <Menu theme={theme} label="Sign up" />
        <ButtonIcon
          variant="themeButton"
          onClick={toggleTheme}
          theme={theme}
          icon={<ThemeIcon />}
        />
      </div>
    </div>
  );
}

export default MenuContainer;
