import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo1.png";
import SearchComponent from "./SearchComponent";
import UserProfile from "./UserProfile";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showProfile, setShowProfile] = useState(false);

  const handleProfileToggle = (e) => {
    e.stopPropagation();
    setShowProfile(!showProfile);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const isMobile = windowWidth < 600;
  const isOverflowing = windowWidth < 800;

  return (
    <div className="bg-white h-16 mt-6 sm:mt-8 flex items-center fixed w-full shadow-md z-50">
      <div className="w-1/5 flex items-center justify-center">
        <img src={Logo} alt="Logo" className="h-8 sm:h-10" />
        <h2 className="pl-2 text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold">
          Siasta
        </h2>
      </div>
      <div className="w-3/5 flex items-center justify-center space-x-4 overflow-hidden lg:overflow-visible">
        {isMobile ? (
          <div>
            <Link
              to="/"
              className="text-sm sm:text-gray-800 hover:text-pink-500"
              exact="true"
            >
              HOME
            </Link>
            <span>|</span>
            {isOverflowing && (
              <span onClick={handleMenuToggle} className="cursor-pointer text-sm">
                More
              </span>
            )}
          </div>
        ) : (
          <>
            <Link to="/" className="text-sm sm:text-gray-800 hover:text-pink-500">
              HOME
            </Link>
            <span>|</span>
            <Link to="/aboutus" className="text-sm sm:text-gray-800 hover:text-pink-500">
              ABOUT US
            </Link>
            <span>|</span>
            <Link to="/makeup" className="text-sm sm:text-gray-800 hover:text-pink-500">
              MAKEUP
            </Link>
            <span>|</span>
            <Link to="/shopall" className="text-sm sm:text-gray-800 hover:text-pink-500">
              SHOP ALL
            </Link>
            <span>|</span>
            <Link to="/howto" className="text-sm sm:text-gray-800 hover:text-pink-500">
              HOW TO
            </Link>
          </>
        )}

        {showMenu && (
          <div className="absolute top-16 right-0 z-50 bg-white border rounded mt-2 shadow-lg">
            <div className="w-40 flex flex-col p-4">
              <div className="flex justify-end cursor-pointer">
                <FaTimes onClick={handleMenuToggle} />
              </div>
              <Link
                to="/"
                className="text-sm sm:text-gray-800 hover:text-pink-500 block py-2"
                activeClassName="text-pink-500 font-semibold"
              >
                HOME
              </Link>
              <Link to="/aboutus" className="block py-2 hover:bg-gray-100">
                ABOUT US
              </Link>
              <Link to="/makeup" className="block py-2 hover:bg-gray-100">
                MAKEUP
              </Link>
              <Link to="/shopall" className="block py-2 hover:bg-gray-100">
                SHOP ALL
              </Link>
              <Link to="/howto" className="block py-2 hover:bg-gray-100">
                HOW TO
              </Link>
            </div>
          </div>
        )}
      </div>
      <SearchComponent isMobile={isMobile} />
      <div className="w-1/6 flex items-center justify-center">
        <Link to="/cart">
          <FaShoppingCart style={{ fontSize: "20px", color: "#FF69B4" }} />
        </Link>
        <FaUserCircle
          style={{ fontSize: "24px", color: "#4a4a4a", cursor: "pointer" }}
          className="ml-3 sm:ml-5"
          onClick={handleProfileToggle}
        />
      </div>
      {showProfile && <UserProfile handleClose={handleProfileToggle} />}
    </div>
  );
};

export default NavBar;
