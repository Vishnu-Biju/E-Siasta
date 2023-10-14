import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchValue}`
      );
      const results = response.data.map((item) => item.name);
      setSearchResults(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (result) => {
    setSearchValue('');
    setSearchResults([]);
    navigate(`/shopall?search=${result}`); // Redirect to shop all page with the search query
  };

  return (
    <div className="relative">
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch();
        }}
        placeholder="Search for products"
        className="w-full md:w-96 h-10 px-4 rounded-full border-2 border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      {loading ? (
        <div className="absolute bg-white w-full md:w-96 max-h-60vh mt-2 p-2 shadow-md rounded-md overflow-y-auto border-2 border-pink-500">
          <div className="animate-pulse h-10 bg-gray-300 rounded my-1"></div>
          <div className="animate-pulse h-10 bg-gray-300 rounded my-1"></div>
          <div className="animate-pulse h-10 bg-gray-300 rounded my-1"></div>
        </div>
      ) : searchResults.length > 0 ? (
        <div className="absolute bg-white w-full md:w-96 max-h-60vh mt-2 p-2 shadow-md rounded-md overflow-y-auto border-2 border-pink-500">
          {searchResults.map((result, index) => (
            <div
              key={index}
              className="cursor-pointer py-2 text-gray-800 hover:bg-gray-100 rounded-md"
              onClick={() => handleSelect(result)}
            >
              {result}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default SearchComponent;
