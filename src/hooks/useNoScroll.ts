import { useEffect } from 'react';

export const useNoScroll = (active: boolean) => {
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
  }, [active]);

  return () => {
    document.body.style.overflow = 'auto';
  };
};

export default useNoScroll;
