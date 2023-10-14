import React from 'react';
import BannerTwo from "../components/BannerTwo";

const MakeUp = () => {
  return (
    <div className=" mx-auto  pt-16 h-70vh mb-16 pb-16">
       <BannerTwo />
      <h2 className="text-3xl font-bold mb-4 text-center pt-16 pb-10">Explore Our Premium Makeup Collection</h2>
      <p className="text-lg mb-6 pb-8 px-10">
        Discover the latest and trendiest makeup products at our store. From luxurious foundations to vibrant lipsticks and versatile palettes, we offer a diverse range of high-quality makeup items to enhance your beauty routine.
      </p>
      <p className="text-lg mb-6 px-10">
        Our makeup collection is curated to cater to various styles and preferences, ensuring that you find the perfect products for every occasion. We collaborate with top beauty brands to bring you premium and reliable makeup options that reflect elegance and creativity.
      </p>
      <p className="text-lg mb-6 px-10">
        Elevate your makeup game with our exclusive selection and unlock endless possibilities to create stunning looks for any event. Experience the magic of makeup with our exceptional products.
      </p>
    </div>
  );
};

export default MakeUp;
