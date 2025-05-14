import React from 'react';
import { motion } from 'framer-motion';

const ExperienceEducation = () => {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-6">

      {/* Education Section */}
      <motion.section
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">🎓 Education</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">Lambton College</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-1">Full Stack Software Development</p>
            <p className="text-sm text-gray-500">Sep 2023 – April 2025 | GPA: 3.2 / 4.0</p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-2">CZMG College</h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm mb-1">Bachelor of Computer Application</p>
            <p className="text-sm text-gray-500">June 2019 – March 2022 | GPA: 7.17 / 10</p>
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">💼 Experience</h2>
        <div className="space-y-10">

          <div className="bg-gradient-to-br from-teal-100 to-teal-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-1">Full Stack Developer – Binary Bit</h3>
            <p className="text-sm text-gray-500 mb-3">May 2022 – Aug 2023</p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed client-facing web apps using Flask and Java with database integration.</li>
              <li>Built REST APIs and modularized components for performance and scalability.</li>
              <li>Integrated CI/CD pipelines with GitHub Actions for automated deployments.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-pink-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-1">Application Developer Intern – IWSS Tech</h3>
            <p className="text-sm text-gray-500 mb-3">Jan 2020 – Mar 2021</p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Developed ASP.NET Core MVC features for internal HR applications.</li>
              <li>Created engaging internal tools like a quiz engine and 2D board game system.</li>
              <li>Led bug triage and version control using Git across team environments.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-gray-800 dark:to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-1">WIL Intern – Lambton College</h3>
            <p className="text-sm text-gray-500 mb-3">Jan 2025 – Mar 2025</p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Architected and built a micro-learning platform using Flask and Bootstrap.</li>
              <li>Managed Agile tasks and GitHub-integrated CI workflows for weekly releases.</li>
            </ul>
          </div>

        </div>
      </motion.section>
    </section>
  );
};

export default ExperienceEducation;
