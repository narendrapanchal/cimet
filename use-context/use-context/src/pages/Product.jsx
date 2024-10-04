import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Product() {
  const data = useLoaderData();

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-96 object-cover mb-6" 
        />
        <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
        <p className="text-gray-700 mb-4">{data.description}</p>
        <p className="text-2xl font-semibold mb-4">${data.price.toFixed(2)}</p>
        
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-2">
            {Array.from({ length: Math.floor(data.rating.rate) }, (_, i) => (
              <span key={i} className="text-yellow-500">&#9733;</span>
            ))}
            {data.rating.rate % 1 > 0 && <span className="text-yellow-500">&#9734;</span>}
          </span>
          <span className="text-gray-600">({data.rating.count} reviews)</span>
        </div>

        <p className="text-sm text-gray-500 mb-2">Category: {data.category}</p>
      </div>
    </div>
  );
}

export default Product;
