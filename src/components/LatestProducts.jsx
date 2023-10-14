
import React , { useEffect, useState } from 'react';

import axios from 'axios';
import { ProductCard } from './ProductCard'; // Import your ProductCard component
import ProductCardSkeleton from './ProductCardSkeleton'; // Import the loading skeleton component

const LatestProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://makeup-api.herokuapp.com/api/v1/products.json')
      .then((res) => {
        console.log('Products Fetched Successfully');
        const limitedData = res.data.slice(0, 6); // Get the first 6 products
        setData(limitedData);
        setIsLoading(false); // Update loading state once data is fetched
      })
      .catch((err) => {
        console.log('Product Fetch Error');
        setIsLoading(false); // Update loading state in case of an error
      });
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-10">
      {isLoading ? ( // Check if data is still loading
        <>
          <ProductCardSkeleton /> 
          <ProductCardSkeleton />
          <ProductCardSkeleton />
        </>
      ) : (
        // Render the ProductCard component once data is loaded
        data.map((product, index) => (
          <ProductCard key={index} product={product} className="mb-4 md:mb-0" />
        ))
      )}
    </div>
  );
};

export default LatestProducts;
