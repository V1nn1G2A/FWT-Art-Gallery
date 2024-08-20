import { useState } from 'react';
import styles from './multiselect.module.scss';

import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import TagSelector from '../TagSelector/TagSelector';

import MultiselectArrow from '../../assets/icons/MultiselectArrow';

export interface MultiselectProps {
  items: string[];
  theme?: 'light' | 'dark';
  label: string;
  selectedItems: string[];
  // Вопрос Косте: Как передать функцию, которая принимает параметр?
  // Линтер говорит что параметр объявлен, но не использован.
  // eslint-disable-next-line no-unused-vars
  onSelectedItemsChange: (selectedItems: string[]) => void;
}

function Multiselect({
  items,
  theme = 'light',
  label,
  selectedItems,
  onSelectedItemsChange,
}: MultiselectProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [activeItems, setActiveSelectedItems] = useState(false);

  const handleChange = (item: string, isChecked: boolean) => {
    if (isChecked) {
      if (!selectedItems.includes(item)) {
        onSelectedItemsChange([...selectedItems, item]);
      }
    } else {
      onSelectedItemsChange(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  return (
    <div
      className={`${styles.multiselect} ${styles[`multiselect--${theme}`]} ${activeItems && styles[`multiselect--active`]}`}
    >
      <Input
        label={label}
        theme={theme}
        onChange={(e) => {
          setInputValue(e.target.value);
          setActiveSelectedItems(true);
        }}
        value={inputValue || ''}
        disabled={selectedItems.length !== 0}
        placeholder=""
      />

      <div className={styles.multiselect_selectedItems}>
        {selectedItems.map((item) => (
          <TagSelector
            key={item}
            text={item}
            theme={theme}
            variant="icon"
            onClick={() => {
              onSelectedItemsChange(
                selectedItems.filter((selectedItem) => selectedItem !== item)
              );
            }}
          />
        ))}
      </div>

      <ButtonIcon
        onClick={() => setActiveSelectedItems(!activeItems)}
        theme={theme}
        variant="transparent"
        icon={<MultiselectArrow />}
      />

      <ul className={styles.multiselect_items}>
        {activeItems &&
          items
            .filter((item) => item.includes(inputValue))
            .map((item) => (
              <li key={item} className={styles.multiselect_item}>
                <Checkbox
                  key={item}
                  label={item}
                  theme={theme}
                  checked={selectedItems.includes(item)}
                  onChange={(e) => handleChange(item, e.target.checked)}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}

export default Multiselect;
