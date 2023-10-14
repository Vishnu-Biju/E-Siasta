import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons/fa

const customImages = [
  '/custom-images/image1.webp',
  '/custom-images/image2.jpg',
  '/custom-images/image3.avif',
  '/custom-images/image4.avif',
  '/custom-images/image5.webp',
  '/custom-images/image6.jpg',
  '/custom-images/image7.avif',
  '/custom-images/image8.jpeg',
];

export function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const truncatedDescription =
    product.description.length > 20 ? product.description.slice(0, 20) + '...' : product.description;

  const handleImageError = (e) => {
    e.target.src = customImages[Math.floor(Math.random() * customImages.length)];
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart', { state: { product: product } }); // Navigate to the cart page and pass product details
  };

  return (
    <section className="py-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <img
          src={product.image_link}
          alt={product.name}
          className="w-full h-52 object-cover"
          onError={handleImageError}
        />
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-sm mt-2">{truncatedDescription}</p>
          <div className="flex items-center mt-3">
            <div className="text-yellow-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} className="inline" />
              ))}
            </div>
            <span className="text-yellow-500 ml-2">{product.rating}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-800 text-2xl font-semibold">${product.price}</span>
            <span className="text-gray-600 text-sm ml-2">/ per item</span>
          </div>
          <button
            className="w-full bg-black text-white py-2 px-4 rounded-full mt-4 hover:bg-black transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
