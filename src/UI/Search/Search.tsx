import styles from './search.module.scss';

import Input, { InputProps } from '../Input/Input';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

import SearchIcon from '../../assets/icons/SearchIcon';
import ClearIcon from '../../assets/icons/ClearIcon';

export interface SearchProps extends InputProps {
  onSearch: () => void;
  onClear: () => void;
}

function Search({ onSearch, onClear, ...other }: SearchProps) {
  return (
    <div className={styles.search}>
      <ButtonIcon
        theme={other.theme}
        variant="transparent"
        icon={<SearchIcon />}
        onClick={onSearch}
      />
      <Input
        text={other.text}
        label=""
        placeholder={other.placeholder}
        theme={other.theme}
        onChange={other.onChange}
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
}

export default Search;
