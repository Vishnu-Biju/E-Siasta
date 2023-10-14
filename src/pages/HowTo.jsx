import React from 'react';

const HowTo = () => {
  const howToData = [
    {
      id: 1,
      title: 'How to Get Started',
      description:
        'Learn the basics of getting started with our platform. Understand the key features and how to navigate through the interface.',
    },
    {
      id: 2,
      title: 'Tips and Tricks',
      description:
        'Discover the best tips and tricks to make the most out of our services. Optimize your workflow and enhance productivity.',
    },
    {
      id: 3,
      title: 'Best Practices',
      description:
        'Explore the best practices to achieve optimal results. Follow our recommended strategies and techniques for success.',
    },
    {
      id: 4,
      title: 'Advanced Techniques',
      description:
        'Dive into the advanced techniques to unlock the full potential of our tools. Elevate your skills to the next level.',
    },
    {
      id: 5,
      title: 'Common Pitfalls to Avoid',
      description:
        'Identify the common pitfalls that users often encounter and learn how to avoid them for a smoother experience.',
    },
    // Add more data as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mt-16 mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">How To</h2>
          <p className="text-lg text-gray-600">Explore our collection of helpful guides and tutorials</p>
        </div>
        {howToData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 w-70vw mx-auto mb-8"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowTo;
