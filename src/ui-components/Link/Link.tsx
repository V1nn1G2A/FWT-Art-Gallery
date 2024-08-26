import React from 'react';

import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styles from './link.module.scss';

export interface CustomLinkProps extends RouterLinkProps {
  label?: string;
  theme?: 'light' | 'dark';
}

const Link: React.FC<CustomLinkProps> = ({
  label = '',
  theme = 'light',
  ...other
}) => {
  return (
    <RouterLink
      className={`${styles.link} ${styles[`link--${theme}`]}`}
      {...other}
    >
      {label}
    </RouterLink>
  );
};

export default Link;
