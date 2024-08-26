import React from 'react';

import styles from './mainPage.module.scss';

import CardList from '../../ui-components/CardList/CardList';
import ButtonText from '../../ui-components/ButtonText/ButtonText';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';
import { useAppSelector } from '../../redux';

import artistsStaticAPI from '../../api/artistsStaticAPI';

const MainPage: React.FC = () => {
  const { theme } = useThemeContext();
  const { data: cards = { cards: [] }, isLoading /* , error */ } =
    artistsStaticAPI.useGetArtistsQuery();

  const isAuth = useAppSelector((state) => state.auth.isAuth);

  return (
    <section className={styles.mainPage}>
      <div className="container">
        {isAuth && (
          <div className={styles.mainPage_buttons}>
            <ButtonText
              variant="icon"
              theme={theme}
              label="Add artist"
              aria-label="Add artist"
              onClick={() => {}}
            />
          </div>
        )}
        <CardList cards={cards.cards} isLoading={isLoading} theme={theme} />
      </div>
    </section>
  );
};

export default MainPage;
