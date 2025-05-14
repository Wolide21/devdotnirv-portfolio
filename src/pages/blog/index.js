import React from 'react';
import BlogCard from '../../components/BlogCard';
import blogData from '../../data/blogData';

const BlogIndex = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8">My Blog Posts</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(blogData).map(([id, blog]) => (
          <BlogCard key={id} id={id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
