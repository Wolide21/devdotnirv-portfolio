import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProjectCard from '../components/ProjectCard';
import {
  SiJavascript, SiPython, SiFlask, SiMongodb, SiReact, SiNodedotjs, SiExpress,
  SiHtml5, SiCss3, SiTailwindcss,
} from 'react-icons/si';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sneakerDashboardImage from '../Images/Flask/dashboard.png';
import s3LoginImage from '../Images/S3-cloud/login.png';
import mernProjectImage from '../Images/Mern-project/3.png';

const techIcons = {
  javascript: <SiJavascript className="text-yellow-400" title="JavaScript" />,
  python: <SiPython className="text-blue-400" title="Python" />,
  flask: <SiFlask className="text-gray-300" title="Flask" />,
  mern: [
    <SiMongodb key="mongo" className="text-green-500" title="MongoDB" />,
    <SiExpress key="express" className="text-white" title="Express" />,
    <SiReact key="react" className="text-cyan-400" title="React" />,
    <SiNodedotjs key="node" className="text-green-300" title="Node.js" />
  ],
  html: <SiHtml5 className="text-red-500" title="HTML5" />,
  css: <SiCss3 className="text-blue-500" title="CSS3" />,
  tailwind: <SiTailwindcss className="text-teal-400" title="TailwindCSS" />,
};

const projects = [
  {
    id: 1,
    title: 'Sneaker Store (Flask)',
    description: 'A sleek e-commerce store using Flask & MongoDB, with user login, product inquiry, and admin panel.',
    image: sneakerDashboardImage,
    tech: [techIcons.python, techIcons.flask, techIcons.mern[0]],
    github: 'https://github.com/Wolide21/FlaskEcom',
    demo: '',
  },
  {
    id: 2,
    title: 'User Management (MERN)',
    description: 'Full-stack user management system with secure login, token auth, and CRUD features.',
    image: mernProjectImage,
    tech: [...techIcons.mern],
    github: 'https://github.com/Wolide21/UserManagement',
    demo: '',
  },
  {
    id: 3,
    title: 'S3 File Upload (Python + AWS)',
    description: 'A Python-based file uploader connected to AWS S3 with real-time CloudWatch logging.',
    image: s3LoginImage,
    tech: [techIcons.python, techIcons.mern[0]],
    github: 'https://github.com/Wolide21/MernProject1',
    demo: '',
  },
];

const upcomingProjects = [
  {
    id: 4,
    title: 'AI Chatbot (NLP + Flask)',
    description: 'Coming soon: A context-aware chatbot using NLTK + NumPy with Flask web integration.',
    tech: [techIcons.python, techIcons.flask],
  },
  {
      id: 5,
      title: 'Java Employee Manager',
      description: 'Spring MVC project for managing employees with database integration.',
      image: '/images/placeholder-java.jpg',
      tech: [techIcons.java, techIcons.mysql],
      github: '',
  }
];

const Projects = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-10 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

      {/* Current Projects */}
      <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map(project => (
          <CSSTransition key={project.id} timeout={500} classNames="fade">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {/* Upcoming Projects */}
      <div className="mt-20 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700 dark:text-gray-300">Upcoming Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingProjects.map(project => (
            <div key={project.id} className="p-6 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 shadow">
              <h4 className="text-xl font-bold mb-2">{project.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
              <div className="flex gap-2 text-xl">
                {project.tech.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
