import React from 'react';
import "./index.css";
import NavBar from "./components/NavBar";
import FreeShipping from "./components/FreeShipping";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import MakeUp from "./pages/MakeUp";
import ShopAll from "./pages/ShopAll";
import HowTo from "./pages/HowTo";
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Error404 from './pages/Error404';

function App() {
  return (
    <>
      <FreeShipping />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/makeup" element={<MakeUp/>}/>
          <Route path="/shopall" element={<ShopAll/>}/>
          <Route path="/howto" element={<HowTo/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/*" element={<Error404/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
