import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { CurrencyContext } from '../context/CurrencyContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const {currency,rate}=useContext(CurrencyContext);
  const [isAddedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    addToCart(product);
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="relative border p-4 cursor-pointer hover:shadow-lg transition"
    >
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">{product.title}</h2>
      <p className="text-gray-600">{currency} {(+product.price*rate).toFixed(2)}</p>

      <button
        onClick={(event)=>{
          event.stopPropagation(); 
          if(isAddedToCart){
            navigate(`/cart`);
          }
          handleAddToCart()
        }}
        className={`mt-2 px-4 py-2 rounded flex items-center bg-green-500 hover:bg-green-600 text-white`}   
      >
        {isAddedToCart ? (
          "Go to cart"
        ) : (
          <>
            <FaShoppingCart className="mr-2" />
            Add to cart
          </>
        )}
      </button>

      {/* Link visible on hover */}
      <a 
        href={`/products/${product.id}`} 
        className="absolute bottom-4 right-4 text-blue-500"
      >
        View Details
      </a>

      {/* Go to Cart link when added to cart */}
      
    </div>
  );
};

export default ProductCard;
