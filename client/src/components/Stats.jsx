import React, { memo, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import ComponentErrorBoundary from './ComponentErrorBoundary';

const StatCard = memo(({ stat, index }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
      role="article"
      aria-label={`${stat.label} statistics`}
    >
      <motion.div
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : { scale: 0.5 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="text-5xl font-bold text-blue-400 mb-4"
        aria-label={`${stat.number} ${stat.label}`}
      >
        {stat.number}
      </motion.div>
      <h3 className="text-2xl font-semibold text-white mb-3">{stat.label}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{stat.description}</p>
    </motion.div>
  );
});

StatCard.propTypes = {
  stat: PropTypes.shape({
    number: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

StatCard.displayName = 'StatCard';

const Stats = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    {
      number: '50+',
      label: 'Schools',
      description: 'Partnered with government schools'
    },
    {
      number: '1000+',
      label: 'Students',
      description: 'Trained in AI technology'
    },
    {
      number: '25+',
      label: 'Projects',
      description: 'Successfully implemented'
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'In student engagement'
    }
  ];

  const renderStatCard = useCallback((stat, index) => (
    <StatCard key={stat.label} stat={stat} index={index} />
  ), []);

  return (
    <ComponentErrorBoundary>
      <section 
        ref={ref}
        className="py-32 bg-gray-900/50 backdrop-blur-sm"
        aria-labelledby="stats-heading"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 
              id="stats-heading"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              Our Impact in Numbers
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Making a difference in education through AI innovation
            </p>
          </motion.div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            role="list"
            aria-label="Statistics cards"
          >
            {stats.map(renderStatCard)}
          </div>
        </div>
      </section>
    </ComponentErrorBoundary>
  );
};

export default memo(Stats); 