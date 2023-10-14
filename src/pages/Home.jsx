import React from "react";
import LatestProducts from "../components/LatestProducts";
import BannerOne from "../components/BannerOne";
import BannerTwo from "../components/BannerTwo";
import TextComponent from "../components/TextComponent";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="xl:mx-auto">
      <BannerOne />
      <TextComponent text="Latest Products" />
      <div className="p-4 md:ml-4 md:mr-4 xl:w-9/12 xl:mx-auto">
        <LatestProducts />
      </div>
      <BannerTwo />
      <TextComponent text="What's in Season?" />
      <div className="p-4 md:ml-4 md:mr-4 xl:w-9/12 xl:mx-auto">
        <LatestProducts />
      </div>
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
