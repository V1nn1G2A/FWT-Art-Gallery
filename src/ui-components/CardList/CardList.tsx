import Card, { CardProps } from '../Card/Card';
import SkeletonCard from '../Card/SkeletonCard/SkeletonCard';

import styles from './cardList.module.scss';

export interface CardListProps {
  cards: CardProps[];
  isLoading?: boolean;
  errorMessage?: string | null;
  theme?: 'light' | 'dark';
}

export default function CardList({
  cards,
  isLoading,
  errorMessage,
  theme,
}: CardListProps) {
  if (isLoading) {
    return (
      <ul className={styles.cardList}>
        {[...new Array(6)].map((_, index) => (
          <SkeletonCard key={index} theme={theme} />
        ))}
      </ul>
    );
  }

  if (errorMessage) {
    return <p className={styles.noMatches_result}>{errorMessage}</p>;
  }

  return (
    <ul className={styles.cardList}>
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
    </ul>
  );
}
