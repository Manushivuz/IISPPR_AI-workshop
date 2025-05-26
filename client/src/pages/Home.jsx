import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Stats from '../components/Stats';
import Features from '../components/Features';
import ParallaxBackground from '../components/ParallaxBackground';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ParallaxBackground />
      <main>
        <Hero />
        <Stats />
        <Features />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </motion.div>
  );
};

export default Home; 