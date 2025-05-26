import React from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import BackToHomeButton from '../components/BackToHomeButton';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Emily Chen",
      role: "Research Director",
      content: "The AI LABS at IISPPR has been instrumental in advancing our research capabilities. The facilities and expertise available here are world-class.",
      image: "/testimonial1.jpg"
    },
    {
      name: "Prof. James Wilson",
      role: "Academic Partner",
      content: "Working with IISPPR AI LABS has opened new avenues for collaborative research. Their commitment to innovation is truly inspiring.",
      image: "/testimonial2.jpg"
    },
    {
      name: "Sarah Thompson",
      role: "Student Researcher",
      content: "The learning environment here is exceptional. I've grown tremendously as a researcher and gained invaluable experience in AI development.",
      image: "/testimonial3.jpg"
    }
  ];

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
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-300 text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-blue-300">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80 italic">"{testimonial.content}"</p>
            </motion.div>
          ))}
        </div>
      </main>
      <BackToHomeButton />
    </motion.div>
  );
};

export default Testimonials; 