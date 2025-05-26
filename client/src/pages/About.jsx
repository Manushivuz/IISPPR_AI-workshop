import React from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import BackToHomeButton from '../components/BackToHomeButton';

const About = () => {
  const teamMembers = [
    {
      name: "Dr. John Smith",
      role: "Lead Researcher",
      description: "Expert in Machine Learning and AI",
      image: "/team1.jpg"
    },
    {
      name: "Dr. Sarah Johnson",
      role: "AI Specialist",
      description: "Specializing in Deep Learning",
      image: "/team2.jpg"
    },
    {
      name: "Dr. Michael Chen",
      role: "Data Scientist",
      description: "Expert in Big Data Analytics",
      image: "/team3.jpg"
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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-8 text-center">About IISPPR AI LABS</h1>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
            <p className="text-white/80 mb-6">
              At IISPPR AI LABS, we are dedicated to advancing the field of artificial intelligence through innovative research, 
              education, and practical applications. Our mission is to empower the next generation of AI professionals and 
              contribute to the development of cutting-edge AI solutions.
            </p>
            <p className="text-white/80">
              We focus on creating a collaborative environment where researchers, students, and industry professionals can 
              work together to solve complex problems and drive technological innovation.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-300 mb-2">{member.role}</p>
                  <p className="text-white/80">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <BackToHomeButton />
    </motion.div>
  );
};

export default About; 