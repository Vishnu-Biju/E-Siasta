import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 pt-16">
      <h2 className="text-3xl font-bold mb-4 text-center pt-16">Welcome to our Makeup E-commerce Store</h2>
      <p className="text-lg mb-6">
        At our makeup e-commerce store, we offer a wide range of high-quality and premium makeup products, including cosmetics, skincare, and beauty accessories. We are dedicated to providing our customers with the latest and trendiest makeup items from renowned brands, ensuring an exceptional shopping experience.
      </p>
      <p className="text-lg mb-6">
        Our mission is to make your shopping experience convenient, enjoyable, and satisfying. We value our customers and aim to deliver the best products and customer service. Explore our diverse collection of makeup products and enhance your beauty routine with our premium items.
      </p>
      <div>
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="john.doe@example.com" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                Message
              </label>
              <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Enter your message"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
