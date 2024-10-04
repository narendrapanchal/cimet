import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Article() {
  const article = useLoaderData();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-700 mb-6">{article.body}</p>
      <div className="border-t border-gray-300 mt-6 pt-4">
        <h2 className="text-xl font-semibold mb-2">Details</h2>
        <p className="text-gray-600">User ID: {article.userId}</p>
        <p className="text-gray-600">Article ID: {article.id}</p>
      </div>
    </div>
  );
}

export default Article;
