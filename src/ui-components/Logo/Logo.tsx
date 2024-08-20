import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';

export interface LogoProps {
  theme?: 'light' | 'dark';
  logoSVG: React.ReactNode; // ReactNode позволяет передавать любые элементы React
}

function Logo({ theme = 'light', logoSVG }: LogoProps) {
  return (
    <Link to="/" className={`${styles.logo} ${styles[`logo--${theme}`]}`}>
      {logoSVG} {/* Отображение SVG внутри ссылки */}
    </Link>
  );
}

export default Logo;
