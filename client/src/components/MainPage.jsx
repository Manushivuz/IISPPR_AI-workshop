import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../hooks/useSmoothScroll';
import FloatingContactButton from './FloatingContactButton';
import ParallaxBackground from './ParallaxBackground';

const MainPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 via-primary-800 to-secondary-900">
      <ParallaxBackground />
      
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass-effect py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.img 
            src="/logo.png" 
            alt="IISPPR AI LABS" 
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          />
          <div className="hidden md:flex space-x-8">
            {['about', 'projects', 'testimonials', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Rest of the sections remain the same */}
      {/* ... existing sections ... */}

      <FloatingContactButton />
    </div>
  );
};

export default MainPage; 