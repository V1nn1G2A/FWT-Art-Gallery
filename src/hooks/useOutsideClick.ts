import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        const targetStyles = getComputedStyle(ref.current);

        if (targetStyles.getPropertyValue('pointer-events') !== 'none') {
          callback();
        }
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
};

export default useOutsideClick;
