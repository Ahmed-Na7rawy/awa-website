import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from '../context/LenisContext';

export const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();
  const { scrollTo } = useLenis();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          scrollTo(element, { offset: -80 });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      scrollTo(0, { immediate: true });
    }
  }, [pathname, search, hash, scrollTo]);

  return null;
};
