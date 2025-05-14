import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [form, setForm] = useState({ email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // For production: use EmailJS or a backend API
      console.log('Form Submitted:', form);
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-16 px-6 min-h-screen">
      <motion.div
        className="max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
        
        {submitted ? (
          <p className="text-green-500 text-center">Thanks! I’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-md bg-white dark:bg-gray-700"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-3 rounded-md bg-white dark:bg-gray-700"
              rows={5}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Send Message
            </button>
          </form>
        )}

        {/* Contact & Skill Info */}
        <div className="mt-10 text-sm text-gray-600 dark:text-gray-400 text-center">
          <div className="flex justify-center gap-6 mt-4 text-xl">
            <a href="mailto:anirav52@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/Wolide21" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/nirav-acharya-02b92b291" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
          <p className="mt-6"> Python · Java · MERN · Flask · AWS · SQL · CI/CD  Throw anything out of them i can handle it </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
