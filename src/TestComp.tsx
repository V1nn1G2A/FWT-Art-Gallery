/* import PictureList from './UI/PictureList/PictureList';
import type { PictureCardProps } from './UI/PictureCard/PictureCard';
import ButtonIcon from './UI/ButtonIcon/ButtonIcon';
import ThemeIcon from './assets/icons/ThemeIcon';
import Menu from './UI/Menu/Menu'; */
// import MenuContainer from './components/menuContainer/MenuContainer';
import { useState } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Search from './UI/Search/Search';
import style from './testComp.module.scss';

function TestComp() {
  const [value, setValue] = useState('');
  // тестовые пропсы, удалить при подключении запросов
  /* const defaultProps: PictureCardProps = {
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

  return (
    <div className={style.testComp}>
      <Header />
      <Search
        theme="light"
        onSearch={() => {
          console.log('value', value);
        }}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onClear={() => {
          setValue('');
        }}
        text={value}
        placeholder="Поиск"
        error=""
        label=""
      />
      <Footer />
    </div>
  );
}

export default TestComp;
