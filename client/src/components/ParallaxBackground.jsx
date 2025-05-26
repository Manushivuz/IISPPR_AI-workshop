import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ParallaxBackground = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <motion.div
      ref={containerRef}
      style={{ y, opacity }}
      className="fixed inset-0 -z-10 will-change-transform"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
    </motion.div>
  );
};

export default ParallaxBackground; 