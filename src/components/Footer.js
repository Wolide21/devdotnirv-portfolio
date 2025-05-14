import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

const Footer = () => {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-6 text-center transition-all duration-300">
      <div className="flex justify-center space-x-6 mb-4">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 dark:hover:text-blue-400"
        >
          <FaLinkedin size={30} />
        </a>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          className="py-2 px-4 bg-blue-500 dark:bg-blue-600 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 text-white transition"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Top
        </button>


      </div>
    </footer>
  );
};

export default Footer;
