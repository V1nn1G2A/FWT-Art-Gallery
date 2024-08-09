import React, { useState } from 'react';

import styles from './filterItem.module.scss';

export interface FilterItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: 'light' | 'dark';
}

function FilterItem({ label, theme = 'light', ...other }: FilterItemProps) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <button
      className={`${styles.button} ${styles[`button--${theme}`]} ${
        active ? styles['button--active'] : ''
      }`}
      type="button"
      {...other}
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default FilterItem;
