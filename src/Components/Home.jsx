import React from 'react';
import Search from './Search';
import CardInfo from './CardInfo';

const Home = ({ data, onSelect, onSearch, selectedInvention }) => (
  // Menggunakan grid/flex layout
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8"> 
    
    {/* Panel Kiri: Search dan Daftar Inovasi */}
    <div className="lg:col-span-1">
      <Search onSearch={onSearch} />
      <h3 className="text-xl font-semibold border-b-2 border-teal-600 pb-1 mb-3 text-gray-700">Daftar Inovasi</h3>
      <ul className="list-none p-0 max-h-[60vh] overflow-y-auto border border-gray-200 rounded-lg shadow-sm">
        {data.length === 0 ? (
          <li className="p-4 text-gray-500 italic">Tidak ada inovasi dalam kategori ini.</li>
        ) : (
          data.map(item => (
            <li
              key={item.id}
              onClick={() => onSelect(item)}
              // Styling item list dengan conditional classes
              className={`p-3 border-b border-gray-100 cursor-pointer transition duration-100 ease-in-out 
                ${selectedInvention && selectedInvention.id === item.id 
                  ? 'bg-teal-50 text-teal-800 font-semibold hover:bg-teal-100' 
                  : 'bg-white hover:bg-gray-50'
                }`}
            >
              {item.name} <span className="text-sm text-gray-500">({item.era})</span>
            </li>
          ))
        )}
      </ul>
    </div>
    
    {/* Panel Kanan: Detail Inovasi */}
    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-lg">
      <CardInfo invention={selectedInvention} />
    </div>
  </div>
);

export default Home;