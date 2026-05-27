import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', mouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', mouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: { type: 'spring', damping: 20, stiffness: 250, mass: 0.5 },
    },
    hover: {
      height: 64,
      width: 64,
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: 'rgba(14, 165, 233, 0.15)',
      mixBlendMode: 'difference',
      transition: { type: 'spring', damping: 20, stiffness: 250, mass: 0.5 },
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-sky-500 pointer-events-none z-[9999] hidden md:block"
        animate={isHovering ? 'hover' : 'default'}
        variants={variants}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-sky-500 rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 1000, mass: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
