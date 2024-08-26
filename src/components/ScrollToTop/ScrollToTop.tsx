import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import ButtonIcon from '../../ui-components/ButtonIcon/ButtonIcon';
import ArrowDefault from '../../assets/icons/ArrowDefault';

import styles from './scrollToTop.module.scss';

interface ScrollToTopProps {
  theme?: 'light' | 'dark';
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme }) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const showAfter = 400;

  const checkScrollTop = useCallback(() => {
    if (window.scrollY > showAfter) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [showAfter, setIsVisible]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [checkScrollTop]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    handleScrollToTop();
  }, [pathname]);

  return (
    <div className={`${styles.scrollToTop} ${isVisible ? styles.visible : ''}`}>
      <ButtonIcon
        variant="arrow"
        onClick={handleScrollToTop}
        icon={<ArrowDefault />}
        theme={theme}
      />
    </div>
  );
};

export default ScrollToTop;
