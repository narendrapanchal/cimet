import React, { useContext } from 'react';
import { useState } from 'react';
import {CartContext} from "../context/CartContext.jsx";
import { CurrencyContext } from '../context/CurrencyContext.jsx';
const Cart = () => {
  const {cartList,updateCart,addToCart,removeFromCart}=useContext(CartContext);
  const totalPrice = cartList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  const {currency,rate}=useContext(CurrencyContext);
  return (
    <div className='p-4'>
      <h1>Shopping Cart</h1>
      {cartList.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartList.map((item,ind) => (
            <li key={item.id+""+ind} className="flex justify-between items-center border-b py-2">
              <div>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <h2>{item.title}</h2>
                
              </div>
              <div>
                <p>Quantity: {item.quantity}</p>
                <p>{currency} {(item.price*rate).toFixed(2)} </p>
                <button onClick={() => updateCart(item.id, 'increase')} className="mx-1 bg-blue-500 text-white px-2 rounded">+</button>
                <button disabled={item.quantity==1} onClick={() => updateCart(item.id, 'decrease')} className="mx-1 bg-yellow-500 text-white px-2 rounded">-</button>
                <button onClick={() => removeFromCart(ind)} className="mx-1 bg-red-500 text-white px-2 rounded">Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartList.length > 0 && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Total Price: {currency} {(totalPrice*rate).toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
