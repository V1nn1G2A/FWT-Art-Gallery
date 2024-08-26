import React from 'react';

import styles from './artistAvatar.module.scss';

export interface ArtistAvatarProps {
  src: string;
  alt: string;
}

const ArtistAvatar: React.FC<ArtistAvatarProps> = ({ src, alt }) => {
  const baseImageUrl = 'https://internship-front.framework.team/';

  return (
    <div className={styles.artistAvatar}>
      <img
        loading="lazy"
        decoding="async"
        className={styles.artistAvatar_image}
        src={`${baseImageUrl}${src}`}
        alt={alt}
      />
    </div>
  );
};

export default ArtistAvatar;
