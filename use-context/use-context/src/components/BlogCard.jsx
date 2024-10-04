import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 m-4">
      <h2 className="text-xl font-semibold mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
        {post.title}
      </h2>
      <Link
        to={`/blog/article/${post.id}`} 
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
