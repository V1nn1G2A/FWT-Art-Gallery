import styles from './skeletonCard.module.scss';
import pictureStyles from '../card.module.scss';

interface SkeletonCardProps {
  theme?: 'light' | 'dark';
}

function SkeletonCard({ theme = 'light' }: SkeletonCardProps) {
  return (
    <article
      className={`${pictureStyles.card} ${styles.skeleton} ${styles[`skeleton--${theme}`]}`}
    >
      <div className={styles.card_imageSkeleton} />
      <div className={`${pictureStyles.card_info} ${styles.card_infoSkeleton}`}>
        <div className={styles.card_titleSkeleton} />
        <div className={styles.card_subTitleSkeleton} />
      </div>
    </article>
  );
}

export default SkeletonCard;
