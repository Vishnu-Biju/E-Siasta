import React, { useState } from 'react';
import avatarImage from '../assets/avatar.jpg';

const UserProfile = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="absolute top-16 right-4 z-50 bg-gray-100 border rounded mt-2 shadow-lg w-64">
      <div className="p-4 text-center">
        <div className="flex justify-center items-center flex-col mb-4">
          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-300 shadow-md mb-2">
            <img src={avatarImage} alt="Profile Avatar" className="h-12 w-12 rounded-full" />
          </div>
          <h3 className="text-lg font-semibold">Profile</h3>
        </div>
        <div className="mt-4">
          <p className="text-sm">Let's get started!</p>

          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="border rounded p-2 w-full mb-4 focus:outline-none focus:ring focus:border-blue-300"
            />
            <button type="submit" className="bg-red-500 text-white py-2 rounded w-full">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
