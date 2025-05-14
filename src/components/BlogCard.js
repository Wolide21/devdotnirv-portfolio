import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, blog }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
      onClick={() => navigate(`/blog/${id}`)}
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          {blog.date} • {blog.author}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {blog.content.slice(0, 100)}...
        </p>
        <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
          Read More →
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
