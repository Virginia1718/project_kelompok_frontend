import React from 'react';

const Search = ({ onSearch }) => (
  <div className="mb-6">
    <input
      type="text"
      placeholder="Cari inovasi..."
      onChange={(e) => onSearch(e.target.value)}
      // Styling input
      className="w-full p-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
    />
  </div>
);

export default Search;