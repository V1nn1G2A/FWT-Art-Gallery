import PictureCard, { PictureCardProps } from '../PictureCard/PictureCard';

import styles from './pictureList.module.scss';

export interface PictureListProps {
  pictures: PictureCardProps[];
}

export default function PictureList({ pictures }: PictureListProps) {
  return (
    <div className="container">
      <ul className={styles.pictureList}>
        {pictures.length ? (
          pictures.map((picture) => (
            <PictureCard
              key={picture.image}
              title={picture.title}
              subTitle={picture.subTitle}
              image={picture.image}
              onClick={picture.onClick}
              theme={picture.theme}
            />
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
    </div>
  );
}
