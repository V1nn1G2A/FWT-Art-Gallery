import { useState } from 'react';
import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import styles from './header.module.scss';

import MenuContainer from '../menuContainer/MenuContainer';
import MenuWrapper from '../menuWrapper/MenuWrapper';
import Logo from '../../UI/Logo/Logo';
import ButtonIcon from '../../UI/ButtonIcon/ButtonIcon';

import LogoIcon from '../../assets/icons/Logo';
import Burger from '../../assets/icons/Burger';

function Header() {
  const [active, setActive] = useState(false);
  const { theme } = useThemeContext();

  return (
    <header className={`${styles.header} ${styles[`header--${theme}`]}`}>
      <div className="container">
        <div className={styles.header_content}>
          <Logo theme={theme} logoSVG={<LogoIcon />} />
          <MenuContainer theme={theme} />
          <div className={styles.header_burger}>
            <ButtonIcon
              variant="transparent"
              onClick={() => setActive(!active)}
              theme={theme}
              icon={<Burger />}
            />
          </div>
        </div>
        <MenuWrapper
          theme={theme}
          active={active}
          onClick={() => setActive(!active)}
        />
      </div>
    </header>
  );
}

Header.defaultProps = {
  theme: 'light',
};

export default Header;
