import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p className="mt-3 text-xl text-gray-300 sm:mt-4">
          Receive updates, offers, and news directly in your inbox.
        </p>
        <form className="mt-8 sm:flex items-center justify-center">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            type="text"
            name="email"
            id="email-address"
            autoComplete="email"
            required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white focus:outline-none rounded-md shadow-sm sm:max-w-xs bg-gray-700 text-white"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-500"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
