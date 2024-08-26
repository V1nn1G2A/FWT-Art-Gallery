import React from 'react';

import styles from './artistText.module.scss';

import TagSelector from '../../ui-components/TagSelector/TagSelector';
import ArtistBiography from '../ArtistBiography/ArtistBiography';

import { IArtistTextProps } from '../ArtistInfo/ArtistInfo';

const ArtistText: React.FC<IArtistTextProps> = ({ theme, artistInfo }) => {
  return (
    <div className={`${styles.artistText} ${styles[`artistText--${theme}`]}`}>
      <div className={styles.artistText_info}>
        <span className={styles.artistText_dates}>
          {artistInfo.yearsOfLife}
        </span>
        <span className={styles.artistText_birthplace}>
          Feodosia, Russian Empire
        </span>
        <h1 className={styles.artistText_name}>{artistInfo.name}</h1>
      </div>
      <ArtistBiography theme={theme} text={artistInfo.description} />
      <div className={styles.artistText_genres}>
        {artistInfo.genres.map((genre) => (
          <TagSelector key={genre._id} theme={theme} text={genre.name} />
        ))}
      </div>
    </div>
  );
};

export default ArtistText;
