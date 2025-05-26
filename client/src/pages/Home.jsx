import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from '../components/LoadingSpinner';
import ComponentErrorBoundary from '../components/ComponentErrorBoundary';

// Lazy load components with error handling
const lazyLoad = (importFunc) => {
  const LazyComponent = lazy(() => importFunc().catch((error) => {
    console.error('Error loading component:', error);
    return { 
      default: () => (
        <div className="min-h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl text-red-400 mb-2">Failed to load component</h3>
            <p className="text-gray-400">Please try refreshing the page</p>
          </div>
        </div>
      )
    };
  }));
  return LazyComponent;
};

// Lazy load components
const Hero = lazyLoad(() => import('../components/Hero'));
const About = lazyLoad(() => import('../components/About'));
const Projects = lazyLoad(() => import('../components/Projects'));
const Testimonials = lazyLoad(() => import('../components/Testimonials'));
const Contact = lazyLoad(() => import('../components/Contact'));
const Stats = lazyLoad(() => import('../components/Stats'));
const Features = lazyLoad(() => import('../components/Features'));
const ParallaxBackground = lazyLoad(() => import('../components/ParallaxBackground'));

const LoadingFallback = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

const SectionWrapper = ({ children }) => (
  <ComponentErrorBoundary>
    <Suspense fallback={<LoadingFallback />}>
      {children}
    </Suspense>
  </ComponentErrorBoundary>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <SectionWrapper>
        <ParallaxBackground />
      </SectionWrapper>
      
      <main className="relative z-10">
        <SectionWrapper>
          <Hero />
        </SectionWrapper>
        
        <SectionWrapper>
          <Stats />
        </SectionWrapper>
        
        <SectionWrapper>
          <Features />
        </SectionWrapper>
        
        <SectionWrapper>
          <About />
        </SectionWrapper>
        
        <SectionWrapper>
          <Projects />
        </SectionWrapper>
        
        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
        
        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>
    </motion.div>
  );
};

export default Home; 