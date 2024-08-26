import React from 'react';

import styles from './artistArtworks.module.scss';

import CardList from '../../ui-components/CardList/CardList';

import { IPicture } from '../../models/IPictures';

interface ArtistArtworksProps {
  paintings: IPicture[];
  theme: 'light' | 'dark';
}

const ArtistArtworks: React.FC<ArtistArtworksProps> = ({
  paintings,
  theme,
}: ArtistArtworksProps) => {
  return (
    <div className={styles.artistArtworks}>
      <h2
        className={`${styles.artistArtworks_artTitle} ${styles[`artistArtworks_artTitle--${theme}`]}`}
      >
        Artworks
      </h2>
      <CardList cards={paintings} theme={theme} />
    </div>
  );
};

export default ArtistArtworks;
