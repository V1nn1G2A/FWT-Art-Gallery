import React from 'react';

import styles from './logo.module.scss';

export interface LogoProps {
  theme?: 'light' | 'dark';
  logoSVG: React.ReactNode;
}

function Logo({ theme = 'light', logoSVG }: LogoProps) {
  return (
    <div className={`${styles.logo} ${styles[`logo--${theme}`]} `}>
      {logoSVG}
    </div>
  );
}

export default Logo;
