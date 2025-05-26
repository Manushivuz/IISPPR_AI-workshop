import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/IISPPR_LOGO.png';

const SplashScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="text-center"
      >
        <motion.img
          src={logo}
          alt="IISPPR AI LABS"
          className="w-32 h-32 mx-auto mb-4 object-contain"
          initial={{ rotate: -180 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold text-white mb-2"
        >
          IISPPR AI LABS
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/80"
        >
          Empowering AI Education
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen; 