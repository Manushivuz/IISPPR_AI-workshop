import React, { memo } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';
import ComponentErrorBoundary from './ComponentErrorBoundary';

const TestimonialCard = memo(({ testimonial, index }) => {
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
      className="bg-gray-800/30 backdrop-blur-md rounded-xl p-8 hover:transform hover:scale-105 transition-transform duration-300"
      role="article"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
          <p className="text-gray-400">{testimonial.role}</p>
          <p className="text-blue-400 text-sm">{testimonial.school}</p>
        </div>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">{testimonial.content}</p>
    </motion.div>
  );
});

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

TestimonialCard.displayName = 'TestimonialCard';

const Testimonials = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const testimonials = [
    {
      name: 'Manu',
      role: 'Student',
      school: 'IIT Bombay',
      content: 'Learning AI with IISPPR AI Labs was such a great experience! The hands-on projects made everything feel simple and engaging—even the tough stuff was easy to grasp.'
    },
    {
      name: 'Ajay',
      role: 'Teacher',
      school: 'Random School',
      content: 'The AI education program has completely transformed the way I teach. My students are more engaged and genuinely excited to learn—it\'s amazing to see their curiosity grow every day.'
    },
    {
      name: 'Sudhanshu',
      role: 'School Principal',
      school: 'Random School',
      content: 'Partnering with IISPPR AI Labs has truly been a game-changer for our school. I\'ve seen a remarkable difference in how our students learn and engage with AI.'
    }
  ];

  return (
    <ComponentErrorBoundary>
      <section 
        ref={ref}
        className="py-32 bg-gray-900"
        aria-labelledby="testimonials-heading"
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 
              id="testimonials-heading"
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              Success Stories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Hear from our students, teachers, and partners about their experience with IISPPR AI Labs
            </p>
          </motion.div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
            role="list"
            aria-label="Testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.name} 
                testimonial={testimonial} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </ComponentErrorBoundary>
  );
};

export default memo(Testimonials); 