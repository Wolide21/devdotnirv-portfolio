import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu } from 'lucide-react'; // optional icons
import ThemeToggle from './ThemeToggle';


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className={`bg-white dark:bg-gray-900 shadow-md dark:shadow-lg py-4 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 dark:text-white">
          <Link to="/">Acharya Nirav</Link>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6">
          {['/', '/projects', '/blog', '/contact'].map((path, i) => {
            const label = ['Home', 'Projects', 'Blog', 'Contact'][i];
            return (
              <Link
                key={path}
                to={path}
                className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium transition"
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white transition"
            title="Toggle Theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 dark:text-gray-200"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 mt-2 space-y-2">
          <Link to="/" className="block text-gray-700 dark:text-gray-200">Home</Link>
          <Link to="/projects" className="block text-gray-700 dark:text-gray-200">Projects</Link>
          <Link to="/blog" className="block text-gray-700 dark:text-gray-200">Blog</Link>
          <Link to="/contact" className="block text-gray-700 dark:text-gray-200">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
