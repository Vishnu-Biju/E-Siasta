import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus, neque vel suscipit bibendum.
          </p>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Email: example@example.com</p>
          <p className="text-sm">Phone: 123-456-7890</p>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-sm">
            <li className="mb-2">
              <NavLink exact to="/" className="text-gray-800 hover:text-pink-500" activeClassName="text-pink-500 font-semibold">
                HOME
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/makeup" className="text-white-800 hover:text-pink-500">
                MAKEUP
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/shopall" className="text-white-800 hover:text-pink-500">
                SHOP ALL
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/aboutus" className="text-white-800 hover:text-pink-500">
                ABOUT US
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink to="/howto" className="text-white-800 hover:text-pink-500">
                HOW TO
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-gray-500">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
