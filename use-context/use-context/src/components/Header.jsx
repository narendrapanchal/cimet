import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CurrencyComponent from './CurrencyComponent';

const Header = () => {
  const {cartList}=useContext(CartContext);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">Home</Link>
      </div>
      <nav className="space-x-4">
        <Link to="/blog/1" className="hover:text-gray-400 transition-colors">Blog</Link>
        <Link to="/products" className="hover:text-gray-400 transition-colors">Products</Link>
        <Link to="/cart" className="hover:text-gray-400 transition-colors">Cart ({cartList.length})</Link>
        <CurrencyComponent/>
      </nav>
    </header>
  );
};

export default Header;
