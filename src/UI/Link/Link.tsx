import React from 'react';

import styles from './link.module.scss';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  theme?: 'light' | 'dark';
}

function Link({ label, theme = 'light', ...other }: LinkProps) {
  return (
    <a className={`${styles.link} ${styles[`link--${theme}`]}`} {...other}>
      {label}
    </a>
  );
}

export default Link;
