import React, { useState } from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage < pageNumbers.length) {
      const nextPageNumber = currentPage + 1;
      paginate(nextPageNumber);
      setCurrentPage(nextPageNumber);
    }
  };

  return (
    <nav className="mt-4" aria-label="Pagination">
      <ul className="pagination flex justify-center">
        {pageNumbers.includes(1) && (
          <li className="page-item">
            <button onClick={() => paginate(1)} className="px-3 py-1 bg-white border text-sm mx-1 focus:outline-none">
              1
            </button>
          </li>
        )}
        {pageNumbers.includes(2) && (
          <li className="page-item">
            <button onClick={() => paginate(2)} className="px-3 py-1 bg-white border text-sm mx-1 focus:outline-none">
              2
            </button>
          </li>
        )}
        {pageNumbers.length > 2 && (
          <li className="page-item">
            <button onClick={nextPage} className="px-3 py-1 bg-white border text-sm mx-1 focus:outline-none">
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
