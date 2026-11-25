import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLenis } from '../context/LenisContext';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { scrollTo } = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    scrollTo(0);
  };

  return (
    <motion.button
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={handleBackToTop}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  );
};
