import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, tech = [], github, demo }) => {
  return (
    <div className="bg-blue-600 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 text-white">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <div className="flex flex-wrap items-center gap-3 text-2xl mb-4">
          {tech.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-md text-sm"
            >
              <FaGithub /> Code
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-3 py-1 rounded-md text-sm"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
