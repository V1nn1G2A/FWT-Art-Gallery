import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import styles from './main.module.scss';

import MainPage from '../../pages/MainPage/MainPage';
import ArtistPage from '../../pages/ArtistPage/ArtistPage';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Modal from '../Modal/Modal';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

const Main: React.FC = () => {
  const { theme } = useThemeContext();
  const location = useLocation();
  const state = location.state as { backgroundLocation?: Location };

  return (
    <main className={styles.main}>
      <ScrollToTop theme={theme} />

      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<MainPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
      </Routes>

      {state?.backgroundLocation && <Modal theme={theme} />}
    </main>
  );
};

export default Main;
