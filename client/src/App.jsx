import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import SplashScreen from './components/SplashScreen';
import router from './routes';
import { useSmoothScroll } from './hooks/useSmoothScroll';

const App = () => {
  const [loading, setLoading] = useState(true);
  useSmoothScroll();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <SplashScreen key="splash" />
      ) : (
        <RouterProvider router={router} />
      )}
    </AnimatePresence>
  );
};

export default App;
