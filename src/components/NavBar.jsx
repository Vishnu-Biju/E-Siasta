import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo1.png";
import SearchComponent from "./SearchComponent";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const isMobile = windowWidth < 600;
  const isOverflowing = windowWidth < 800;

  return (
    <div className="bg-white h-16 mt-8 flex items-center fixed w-full shadow-md z-50">
      <div className="w-1/5 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="h-10" />
        <h2 className="pl-3 text-xl md:text-2xl lg:text-3xl font-semibold">
          Siasta
        </h2>
      </div>
      <div className="w-3/5 flex items-center justify-center space-x-4 overflow-hidden lg:overflow-visible">
        {isMobile ? (
          <div>
            <Link
              to="/"
              className="text-gray-800 hover:text-pink-500"
              exact="true"
            >
              HOME
            </Link>
            <span>|</span>
            {isOverflowing && (
              <span onClick={handleMenuToggle} className="cursor-pointer">
                More
              </span>
            )}
          </div>
        ) : (
          <>
            <Link to="/" className="text-gray-800 hover:text-pink-500">
              HOME
            </Link>
            <span>|</span>
            <Link to="/aboutus" className="text-gray-800 hover:text-pink-500">
              ABOUT US
            </Link>
            <span>|</span>
            <Link to="/makeup" className="text-gray-800 hover:text-pink-500">
              MAKEUP
            </Link>
            <span>|</span>
            <Link to="/shopall" className="text-gray-800 hover:text-pink-500">
              SHOP ALL
            </Link>
            <span>|</span>
            <Link to="/howto" className="text-gray-800 hover:text-pink-500">
              HOW TO
            </Link>
          </>
        )}

        {showMenu && (
          <div className="absolute top-16 right-0 z-50 bg-white border rounded mt-2 shadow-lg">
            <div className="w-full">
              <Link
                to="/"
                className="text-gray-800 hover:text-pink-500"
                activeClassName="text-pink-500 font-semibold"
              >
                HOME
              </Link>
              <Link to="/aboutus" className="block p-2 hover:bg-gray-100">
                ABOUT US
              </Link>
              <Link to="/makeup" className="block p-2 hover:bg-gray-100">
                MAKEUP
              </Link>
              <Link to="/shopall" className="block p-2 hover:bg-gray-100">
                SHOP ALL
              </Link>
              <Link to="/howto" className="block p-2 hover:bg-gray-100">
                HOW TO
              </Link>
            </div>
            <div
              onClick={handleMenuToggle}
              className="w-full flex justify-end p-2 cursor-pointer"
            >
              <FaTimes />
            </div>
          </div>
        )}
      </div>
      <SearchComponent isMobile={isMobile} />
      <div className="w-1/6 flex items-center justify-center">
        <Link to="/cart">
          <FaShoppingCart style={{ fontSize: "24px", color: "#FF69B4" }} />
        </Link>
        <FaUserCircle style={{ fontSize: "28px" }} className="ml-5" />
      </div>
    </div>
  );
};

export default NavBar;
