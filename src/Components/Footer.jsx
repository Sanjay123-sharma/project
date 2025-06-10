import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">ShopHub</h3>
            <p className="text-gray-300">Your one-stop destination for quality products.</p>
          </div>

     
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-gray-300">
              <li><Link to="/" className="hover:text-white">Products</Link></li>
              
              <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Customer Service</h4>
            <ul className="space-y-1 text-gray-300">
              <li><Link to="/ContactUs" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/orders" className="hover:text-white">Orders Info</Link></li>
              <li><Link to="/FAQ" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>

      
        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-400 text-sm">
          <p>&copy; 2025 ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
