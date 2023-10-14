
import React , { useState, useEffect } from 'react';
import axios from "axios";
import { ProductCard } from "../components/ProductCard"; // Update this import with your ProductCard component
import Pagination from "../components/Pagination";
import ProductCardSkeleton from "../components/ProductCardSkeleton"; // Import the Pagination component
import BannerTwo from "../components/BannerTwo";

const ShopAll = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    axios
      .get("https://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => {
        console.log("Products Fetched Successfully");
        setProducts(res.data);
        setIsLoading(false); // Update loading state once data is fetched
      })
      .catch((err) => {
        console.log("Product Fetch Error");
        setIsLoading(false); // Update loading state in case of an error
      });
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const skeletonArray = new Array(12).fill(0);

  const skeletonItems = skeletonArray.map((_, index) => (
    <ProductCardSkeleton key={index} />
  ));

  return (
    <div className="bg-gray-100 min-h-screen pt-16 ">
      <BannerTwo />
      <div className="px-16" >
        
        <div className="max-w-8xl mx-auto px-16 sm:px-6 lg:px-2 py-10 ">
          <div className="text-center mt-16 mb-8">
            <h2 className="text-6xl font-extrabold text-gray-900">Shop All</h2>
            <p className=" text-2xl text-gray-600 pt-4">
              Explore our extensive collection of products
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 xl:gap-10">
            {isLoading
              ? // Display loading state
                skeletonItems
              : // Display fetched products
                currentProducts.map((product, index) => (
                  <ProductCard
                    key={index}
                    product={product}
                    className="mb-4 md:mb-0"
                  />
                ))}
          </div>
          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={products.length}
            paginate={paginate}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopAll;
