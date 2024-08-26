import React, { useState } from 'react';

import styles from './artistBiography.module.scss';

import ButtonText from '../../ui-components/ButtonText/ButtonText';

import MultiselectArrow from '../../assets/icons/MultiselectArrow';

export interface ArtistBiographyProps {
  text: string;
  theme?: 'light' | 'dark';
}

const ArtistBiography: React.FC<ArtistBiographyProps> = ({ text, theme }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleExpand = () => {
    setIsShowMore(!isShowMore);
  };

  const truncatedText = `${text?.slice(0, 265) || text}${text.length > 265 ? '...' : ''}`;

  return (
    <div
      className={`${styles.artistBiography} ${styles[`artistBiography--${theme}`]}`}
    >
      <p
        className={`${styles.artistBiography_text} ${isShowMore ? styles['artistBiography_text--expanded'] : ''}`}
      >
        {isShowMore ? text : truncatedText}
      </p>
      <ButtonText
        label={isShowMore ? 'READ LESS' : 'READ MORE'}
        onClick={toggleExpand}
        theme={theme}
        variant="icon"
        icon={
          <MultiselectArrow
            style={
              isShowMore
                ? {
                    transform: 'rotate(0deg)',
                    transition: 'transform 0.3s ease-in-out',
                  }
                : {
                    transform: 'rotate(180deg)',
                    transition: 'transform 0.3s ease-in-out',
                  }
            }
          />
        }
      />
    </div>
  );
};

export default ArtistBiography;
