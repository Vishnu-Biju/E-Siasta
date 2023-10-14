import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="border border-gray-300 max-w-md rounded-md p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-md bg-gray-300 h-52 w-52"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
