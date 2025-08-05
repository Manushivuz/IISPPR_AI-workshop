import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import BackToHomeButton from '../components/BackToHomeButton';
import axios from 'axios';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const backend = import.meta.env.VITE_BASE_URL;
  console.log(backend);
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${backend}/api/testimonials`);
        
        // Ensure we always get an array
        const data = Array.isArray(response.data) ? response.data : [];

        setTestimonials(data);
      } catch (err) {
        console.error('Failed to fetch testimonials:', err);
        setTestimonials([]); // fallback to empty array
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <ParallaxBackground />
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          What People Say About Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(testimonials) && testimonials.length > 0 ? (
            testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial._id || index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {testimonial.imageUrl ? (
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover border border-white/30"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-xl font-bold">
                      {testimonial.author?.charAt(0) || 'A'}
                    </div>
                  )}
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-white">
                      {testimonial.author || 'Anonymous'}
                    </h3>
                    <h3 className="text-xl italic text-blue-400">
                      {testimonial.role || 'Full-Stack Developer Intern'}
                    </h3>
                  </div>
                </div>
                <p className="text-white/80 italic">"{testimonial.text}"</p>
              </motion.div>
            ))
          ) : (
            <p className="text-white/60 text-center col-span-full">No testimonials yet.</p>
          )}
        </div>
      </main>
      <BackToHomeButton />
    </motion.div>
  );
};

export default Testimonials;
