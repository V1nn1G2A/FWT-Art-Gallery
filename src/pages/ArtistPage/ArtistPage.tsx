import React from 'react';

import { useParams } from 'react-router-dom';

import artistsStaticAPI from '../../api/artistsStaticAPI';

import styles from './artistPage.module.scss';

import { IArtistInfo } from '../../models/IArtists';
import { IPicture } from '../../models/IPictures';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import ArtistText from '../../components/ArtistInfo/ArtistInfo';
import ArtistArtworks from '../../components/ArtsitArtworks/ArtistArtworks';
import ArtistPageButtons from '../../components/ArtistPageButtons/ArtistPageButtons';

const ArtistPage: React.FC = () => {
  const { theme } = useThemeContext();
  const { id } = useParams();

  const { data = [], isLoading /*  error */ } =
    artistsStaticAPI.useGetArtistByIdQuery({
      id,
    });

  const { artistInfo, paintings } = data as {
    artistInfo: IArtistInfo;
    paintings: IPicture[];
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className={styles.artistPage}>
      <ArtistPageButtons theme={theme} />
      <ArtistText theme={theme} artistInfo={artistInfo} />

      <div className="container">
        <ArtistArtworks theme={theme} paintings={paintings} />
      </div>
    </section>
  );
};

export default ArtistPage;
