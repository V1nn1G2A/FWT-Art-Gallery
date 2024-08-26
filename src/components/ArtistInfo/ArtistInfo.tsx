import React from 'react';

import styles from './artistInfo.module.scss';

import { IArtistInfo } from '../../models/IArtists';

import ArtistText from '../ArtistText/ArtistText';
import ArtistAvatar from '../ArtistAvatar/ArtistAvatar';

export interface IArtistTextProps {
  artistInfo: IArtistInfo;
  theme?: 'light' | 'dark';
}

const ArtistInfo: React.FC<IArtistTextProps> = ({
  artistInfo,
  theme = 'light',
}: IArtistTextProps) => {
  return (
    <div className={styles.artistInfo}>
      <ArtistAvatar src={artistInfo.avatar.src2x} alt={artistInfo.name} />
      <ArtistText theme={theme} artistInfo={artistInfo} />
    </div>
  );
};

export default ArtistInfo;
