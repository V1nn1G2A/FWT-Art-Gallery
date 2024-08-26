import React from 'react';

import styles from './search.module.scss';

import Input, { InputProps } from '../Input/Input';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

import SearchIcon from '../../assets/icons/SearchIcon';
import ClearIcon from '../../assets/icons/ClearIcon';

export interface SearchProps extends InputProps {
  onSearch: () => void;
  onClear: () => void;
}

const Search: React.FC<SearchProps> = ({ onSearch, onClear, ...other }) => {
  return (
    <div className={styles.search}>
      <ButtonIcon
        theme={other.theme}
        variant="transparent"
        icon={<SearchIcon />}
        onClick={onSearch}
      />
      <Input
        label=""
        placeholder={other.placeholder}
        theme={other.theme}
        error={other.error}
      />

      <ButtonIcon
        theme={other.theme}
        variant="transparent"
        icon={<ClearIcon />}
        onClick={onClear}
      />
    </div>
  );
};

export default Search;
