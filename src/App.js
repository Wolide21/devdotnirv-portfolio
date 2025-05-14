import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Project';
import BlogList from './pages/blog'; // This should show the list of all blog posts
import BlogDetail from './pages/blog/[id]'; // This will show the details of a single blog post
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="min-h-screen">
        <TransitionGroup>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<CSSTransition timeout={500} classNames="fade"><Home /></CSSTransition>} />

            {/* Projects Page */}
            <Route path="/projects" element={<Projects />} />

            {/* Blog List Page */}
            <Route path="/blog" element={<CSSTransition timeout={500} classNames="fade"><BlogList /></CSSTransition>} />

            {/* Single Blog Post Page (Dynamic Routing) */}
            <Route path="/blog/:id" element={<CSSTransition timeout={500} classNames="fade"><BlogDetail /></CSSTransition>} />

            {/* Contact Page */}
            <Route path="/contact" element={<CSSTransition timeout={500} classNames="fade"><Contact /></CSSTransition>} />
          </Routes>
        </TransitionGroup>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
