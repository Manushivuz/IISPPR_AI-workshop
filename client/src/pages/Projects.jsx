import React from 'react';
import { motion } from 'framer-motion';
import ParallaxBackground from '../components/ParallaxBackground';
import BackToHomeButton from '../components/BackToHomeButton';

const Projects = () => {
  const projects = [
    {
      title: "AI Research Project",
      description: "Advanced research in machine learning and artificial intelligence applications.",
      image: "/project1.jpg",
      technologies: ["Python", "TensorFlow", "PyTorch"]
    },
    {
      title: "Data Analysis Platform",
      description: "A comprehensive platform for data analysis and visualization.",
      image: "/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Smart Education System",
      description: "An AI-powered education system for personalized learning.",
      image: "/project3.jpg",
      technologies: ["Python", "Django", "React"]
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
          className="text-4xl font-bold text-white mb-8 text-center"
        >
          Our Projects
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <BackToHomeButton />
    </motion.div>
  );
};

export default Projects; 