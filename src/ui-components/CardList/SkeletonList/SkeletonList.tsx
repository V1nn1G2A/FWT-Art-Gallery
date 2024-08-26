import React from 'react';

import styles from '../cardList.module.scss';

import SkeletonCard from '../../Card/SkeletonCard/SkeletonCard';

interface SkeletonListProps {
  theme?: 'light' | 'dark';
}

const SkeletonList: React.FC<SkeletonListProps> = ({ theme = 'light' }) => {
  return (
    <article className={styles.cardList}>
      {[...new Array(6)].map((_, index) => (
        <SkeletonCard key={index} theme={theme} />
      ))}
    </article>
  );
};

export default SkeletonList;
