import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import blogData from '../../data/blogData';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData[id];

  const blogIds = Object.keys(blogData).map(Number);
  const currentIndex = blogIds.indexOf(Number(id));

  const handlePrev = () => {
    if (currentIndex > 0) navigate(`/blog/${blogIds[currentIndex - 1]}`);
  };

  const handleNext = () => {
    if (currentIndex < blogIds.length - 1) navigate(`/blog/${blogIds[currentIndex + 1]}`);
  };

  if (!blog) return <p className="text-center mt-20 text-xl">Blog not found!</p>;

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/blog')}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back to All Blogs
      </button>

      <h2 className="text-4xl font-bold mb-4">{blog.title}</h2>

      <div className="text-sm text-gray-500 mb-4 flex gap-4">
        <span>🕒 {blog.date}</span>
        <span>✍️ {blog.author}</span>
        <span>🏷️ {blog.tags.join(', ')}</span>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-lg shadow mb-6"
      />
      <p className="text-gray-700 text-lg leading-relaxed mb-8">{blog.content}</p>

      <div className="flex justify-between mt-6">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          ← Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === blogIds.length - 1}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
