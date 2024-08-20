import { useState } from 'react';

import styles from './filterItem.module.scss';

export interface FilterItemProps {
  label: string;
  theme?: 'light' | 'dark';
  onClick: () => void;
}

function FilterItem({
  label,
  theme = 'light',
  onClick,
  ...other
}: FilterItemProps) {
  const [selected, setSelected] = useState(false);

  return (
    <button
      className={`${styles.filterItem} ${styles[`filterItem--${theme}`]} ${
        selected ? styles['filterItem--selected'] : ''
      }`}
      type="button"
      onClick={() => {
        onClick();
        setSelected(!selected);
      }}
      {...other}
    >
      {label}
    </button>
  );
}

export default FilterItem;
