
import React , { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'alexa',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel mi commodo, ultrices libero in, efficitur purus.',
      company: 'ABC Company',
      profileImage: '/custom-images/test4.png',
    },
    {
      name: 'vishnu',
      message:
        'Sed pretium neque et justo fermentum, at lacinia ex fermentum. Morbi semper, magna in ultrices ultrices, elit dolor tincidunt justo.',
      company: 'XYZ Company',
      profileImage: '/custom-images/test2.jpg',
    },
    {
      name: 'Jane',
      message:
        'Sed pretium neque et justo fermentum, at lacinia ex fermentum. Morbi semper, magna in ultrices ultrices, elit dolor tincidunt justo.',
      company: 'XYZ Company',
      profileImage: '/custom-images/test3.jpg',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleNext = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-100 py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-36 md:h-48 overflow-hidden">
                <img
                  className="h-full w-full object-cover"
                  src={testimonial.profileImage}
                  alt={`${testimonial.name}'s profile`}
                />
              </div>
              <div className="p-8">
                <p className="text-gray-700 text-base text-center">{testimonial.message}</p>
                <p className="text-gray-800 text-xl text-center mt-4">{testimonial.name}</p>
                <p className="text-gray-500 text-lg text-center">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;





