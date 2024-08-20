import { useEffect } from 'react';

export const useNoScroll = (active: boolean) => {
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
    document.body.style.paddingRight = active ? 'calc(100vw - 100%)' : '0';
  }, [active]);

  return () => {
    document.body.style.overflow = 'auto';
  };
};

export default useNoScroll;
