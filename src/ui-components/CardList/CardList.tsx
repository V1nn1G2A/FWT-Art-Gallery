import React from 'react';

import Card, { CardProps } from '../Card/Card';
import SkeletonList from './SkeletonList/SkeletonList';

import styles from './cardList.module.scss';

export interface CardListProps {
  cards: CardProps[];
  isLoading?: boolean;
  errorMessage?: string | null;
  theme?: 'light' | 'dark';
}

const CardList: React.FC<CardListProps> = ({
  cards,
  isLoading,
  errorMessage,
  theme,
}) => {
  if (isLoading) {
    return <SkeletonList theme={theme} />;
  }

  if (errorMessage) {
    return <p className={styles.noMatches_result}>{errorMessage}</p>;
  }

  return (
    <section className={styles.cardList}>
      {cards.length ? (
        cards.map((card) => (
          <Card key={card.image.original} {...card} theme={theme} />
        ))
      ) : (
        <div className={styles.noMatches}>
          <p className={styles.noMatches_result}>
            No matches for{' '}
            <button
              className={styles.noMatches_findString}
              type="button"
              aria-label="Return for clear search"
              onClick={() => {}}
            >
              Your classification
            </button>
          </p>
          <span className={styles.noMatches_tryAgain}>
            Please try again with a different spelling or keywords.
          </span>
        </div>
      )}
    </section>
  );
};

export default CardList;
