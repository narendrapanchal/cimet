import React from 'react'
import ProductCard from '../components/ProductCard'
import { useLoaderData } from 'react-router-dom'

function ProductsList() {
  const products=useLoaderData()
  return (
    <div className='p-4'>
      <h1 className='text-3xl'>Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => <ProductCard key={product.id} product={product}/>)}
    </div>
    </div>
  )
}

export default ProductsList
