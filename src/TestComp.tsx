import React, { useEffect } from 'react';
import style from './testComp.module.scss';
/* import CardList from './UI/CardList/CardList';
import type { CardProps } from './UI/Card/Card';
import ButtonIcon from './UI/ButtonIcon/ButtonIcon';
import ThemeIcon from './assets/icons/ThemeIcon';
import Menu from './UI/Menu/Menu'; */
// import MenuContainer from './components/menuContainer/MenuContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Checkbox from './ui-components/Checkbox/Checkbox';

import Toast from './ui-components/Toast/Toast';
import Multiselect from './ui-components/Multiselect/Multiselect';
import Input from './ui-components/Input/Input';
import { useThemeContext } from './hooks/useTheme/ThemeContext';
import Pagination from './ui-components/Pagination/Pagination';

function TestComp() {
  // тестовые пропсы, удалить при подключении запросов
  /* const defaultProps: CardProps = {
    title: 'The ninth wave',
    subTitle: '1703',
    image: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
    onClick: () => {},
    theme: currentTheme,
  };

  =const pictures = [
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
  ]; */

  const items = [
    'item 1d sadsa ',
    'item 2dasd as',
    'ite',
    'item 4',
    'aaaaaaaaaaaaaaaitem 5',
    'МАШАЛААААА',
  ];

  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  useEffect(() => {}, [selectedItems]);

  const { theme } = useThemeContext();

  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <div className={style.testComp}>
      <Pagination
        theme={theme}
        totalCount={30}
        pageSize={6}
        currentPage={currentPage}
        onClick={setCurrentPage}
      />
    </div>
  );
}

export default TestComp;
