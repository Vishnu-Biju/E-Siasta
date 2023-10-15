import React from 'react';

const TextComponent = ({ text }) => {
  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center my-8 mt-8 pt-7">
      {text}
    </h1>
  );
};

export default TextComponent;
