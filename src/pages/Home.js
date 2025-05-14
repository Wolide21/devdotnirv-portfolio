import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import bannerImage from '../Images/hero-banner.jpg';
import ExperienceEducation from '../components/ExperienceEducation';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const navigate = useNavigate();
  const fullText = "W E L C O M E !";

  useEffect(() => {
    setDisplayText(''); // Clean state
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(index));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleRedirect = () => {
    navigate('/projects');
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
        alt="A beautiful landscape"
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {displayText}
          </motion.h1>
          <motion.p
            className="text-2xl italic mb-4 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Turning ideas into interactive, scalable experiences.
          </motion.p>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            I’m Nirav Acharya — Full Stack Developer passionate about building clean and functional web solutions.
          </motion.p>
          <motion.button
            onClick={handleRedirect}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            See My Work
          </motion.button>
        </div>
      </section>

      {/* Experience & Education Section */}
      <ExperienceEducation />
    </section>
  );
};

export default Hero;
