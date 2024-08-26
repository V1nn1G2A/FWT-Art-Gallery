import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

export interface LogoProps {
  theme?: 'light' | 'dark';
  logoSVG: React.ReactNode;
}

const Logo: React.FC<LogoProps> = ({ theme = 'light', logoSVG }) => {
  return (
    <Link to="/" className={`${styles.logo} ${styles[`logo--${theme}`]}`}>
      {logoSVG}
    </Link>
  );
};

export default Logo;
