import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const FreeShipping = () => {
  return (
    <div className="bg-black h-8 flex items-center fixed w-full text-white font-sans z-50 overflow-hidden md:overflow-visible">
      <div className="w-1/6 flex items-center justify-center pl-2 md:pl-10 hidden md:flex">
        <FaPhone className="text-white h-4 w-4" />
        <p className="text-xs pl-1">7025259036</p>
      </div>

      <div className="w-1/6 flex items-center justify-center pl-2 md:pl-0 hidden md:flex">
        <FaEnvelope className="text-white h-4 w-4" />
        <p className="text-xs pl-1">nrkdribjk@gmail.com</p>
      </div>

      <div className="w-full flex items-center justify-center text-xs text-center md:w-2/3">
        FREE SHIPPING AUS WIDE FOR ORDERS OVER $60
      </div>

      <div className="w-1/6 flex items-center justify-center pr-2 md:pr-10 hidden md:flex">
        <FaFacebook className="text-white h-4 w-4 pr-2" />
        <FaTwitter className="text-white h-4 w-4 pr-2" />
        <FaInstagram className="text-white h-4 w-4 pr-2" />
        <FaLinkedin className="text-white h-4 w-4" />
      </div>
    </div>
  );
};

export default FreeShipping;
