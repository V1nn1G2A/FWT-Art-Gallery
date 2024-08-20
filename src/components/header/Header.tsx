import { useState } from 'react';
import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import styles from './header.module.scss';

import MenuContainer from '../MenuContainer/MenuContainer';
import MenuWrapper from '../MenuWrapper/MenuWrapper';
import Logo from '../../ui-components/Logo/Logo';
import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';

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
              onClick={() => setActive(true)}
              theme={theme}
              icon={<Burger />}
            />
          </div>
        </div>
        <MenuWrapper
          theme={theme}
          active={active}
          onClick={() => setActive(false)}
        />
      </div>
    </header>
  );
}

export default Header;
