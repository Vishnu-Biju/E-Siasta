import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems } = useCart();
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
  const [quantity, setQuantity] = useState(1);

  const handleImageError = (e) => {
    e.target.src = customImages[Math.floor(Math.random() * customImages.length)];
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * quantity, 0);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 pt-16">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-extrabold text-gray-800 my-24">Your Cart</h2>
        {cartItems && cartItems.length > 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index} className="flex p-4 bg-white my-4 rounded-lg shadow-md">
                <img
                  src={item.image || customImages[Math.floor(Math.random() * customImages.length)]}
                  alt={item.name}
                  className="h-48 w-48 object-cover rounded-lg mr-4"
                  onError={handleImageError}
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">Rating: {item.rating}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center mt-4">
                    <button onClick={handleDecrease} className="text-white px-2 py-1 bg-black rounded-md">
                      -
                    </button>
                    <span className="px-4 text-2xl">{quantity}</span>
                    <button onClick={handleIncrease} className="text-white px-2 py-1 bg-black rounded-md">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <div className="text-xl font-semibold text-gray-800">Total: ${calculateTotal()}</div>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Continue to Payment
              </button>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
