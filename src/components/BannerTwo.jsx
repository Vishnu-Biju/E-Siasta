import React from 'react';
import Banner2 from "../assets/Banner06.png";

const BannerTwo = () => {
  return (
    <div className="relative w-full">
      <img
        src={Banner2}
        alt="Banner01"
        className="w-full object-cover"
      />
      <button
        className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 font-semibold border-2 border-black py-3 px-6 transition-colors"
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "black";
          e.target.style.color = "white";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "transparent";
          e.target.style.color = "black";
        }}
      >
        SHOP NOW
      </button>
    </div>
  );
};

export default BannerTwo;

