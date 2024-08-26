import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './card.module.scss';

import { IPicture } from '../../models/IPictures';

import CardArrow from '../../assets/icons/CardArrow';

export interface CardProps extends IPicture {
  theme?: 'light' | 'dark';
  artistId?: string;
}

const Card: React.FC<CardProps> = ({
  theme = 'light',
  artistId,
  ...picture
}) => {
  const [active, setActive] = useState(false);
  const baseImageUrl = import.meta.env.VITE_APP_BASE_URL;

  return (
    <article className={`${styles.card} ${styles[`card--${theme}`]}`}>
      <img
        className={styles.card_image}
        src={`${baseImageUrl}${picture.image.src}`}
        alt="card"
        loading="lazy"
        decoding="async"
        tabIndex={-1}
      />
      <Link to={`/artist/${artistId}`} className={styles.card_linkOverlay} />
      <div className={styles.card_info}>
        <Link to={`/artist/${artistId}`} className={styles.card_title}>
          {picture.name.toUpperCase()}
        </Link>
        <p className={styles.card_subTitle}>
          {picture.yearOfCreation.toUpperCase()}
        </p>
      </div>
      <button
        className={`${styles.card_button} ${styles[`card_button__${active ? 'active' : ''}`]}`}
        type="button"
        aria-label="Author + Location"
        onClick={() => {
          setActive(!active);
        }}
      >
        <CardArrow />
      </button>
    </article>
  );
};

export default Card;
