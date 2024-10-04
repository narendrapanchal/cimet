import React from 'react'
import Header from '../components/Header'
import ProductCard from '../components/ProductCard'
import { useLoaderData } from 'react-router-dom'
import Carousel from '../components/Carousel';

function Home() {
  const products=useLoaderData();
  const images = [
    'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2108/1522108-i-e9a350f43575',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84kEFIM2tCDl13UrqS9vrRGD3WhO0DK3kJQ&s',
    'https://thumbs.dreamstime.com/b/live-life-written-beach-39981134.jpg',
    'https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/2108/1522108-i-e9a350f43575',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS84kEFIM2tCDl13UrqS9vrRGD3WhO0DK3kJQ&s',
    'https://thumbs.dreamstime.com/b/live-life-written-beach-39981134.jpg'
  ];
  return (
    <div className='p-4'>
<Carousel images={images} />
      <h1 className='text-3xl'>Trending Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => <ProductCard key={product.id} product={product}/>)}
    </div>
    </div>
  )
} 

export default Home
