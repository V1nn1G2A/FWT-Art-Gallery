import React from 'react';

import { Link, LinkProps } from 'react-router-dom';

import styles from './menu.module.scss';

export interface MenuProps extends LinkProps {
  theme?: 'light' | 'dark';
  label: string;
}

const Menu: React.FC<MenuProps> = ({ label, theme = 'light', ...other }) => {
  return (
    <Link className={`${styles.menu} ${styles[`menu--${theme}`]}`} {...other}>
      {label.toUpperCase()}
    </Link>
  );
};

export default Menu;
