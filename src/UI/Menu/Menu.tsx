// Возможно  объединить в будущем с Link

import React from 'react';

import styles from './menu.module.scss';

export interface MenuProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  theme?: 'light' | 'dark';
  label: string;
}

function Menu({ label, theme = 'light', ...other }: MenuProps) {
  return (
    <a className={`${styles.menu} ${styles[`menu--${theme}`]}`} {...other}>
      {label.toUpperCase()}
    </a>
  );
}

export default Menu;
