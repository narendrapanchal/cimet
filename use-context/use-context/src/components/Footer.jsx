import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-8 mb-4">
          <Link to="/contact" className="hover:underline">Contact Us</Link>
          <Link to="/blog/1" className="hover:underline">Blog</Link>
          <Link to="/products" className="hover:underline">Products</Link>
        </div>
        
        <div className="flex space-x-4 mb-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
        </div>
        
        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
