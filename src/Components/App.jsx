import React, { useState } from 'react';
import { iptekData } from '../data/iptekData';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

const App = () => {
  const [selectedInvention, setSelectedInvention] = useState(iptekData[0] || null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGen, setSelectedGen] = useState(null);

  const handleSelectInvention = (invention) => {
    setSelectedInvention(invention);
  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleSelectGen = (genId) => {
    setSelectedGen(genId);
  };

  let filteredData = iptekData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  if (selectedGen !== null) {
    filteredData = filteredData.filter(item => item.generation === selectedGen);
  }

  if (filteredData.length > 0 && (!selectedInvention || !filteredData.find(item => item.id === selectedInvention.id))) {
    setSelectedInvention(filteredData[0]);
  } else if (filteredData.length === 0) {
    if (selectedInvention !== null) setSelectedInvention(null);
  }

  // Mengubah div utama menjadi layout flex kolom
  return (
    <div className="font-sans min-h-screen flex flex-col"> 
      <Header 
        onSelectGen={handleSelectGen} 
        selectedGen={selectedGen} 
      />
      <main className="flex-1 p-5 lg:p-10">
        <Home
          data={filteredData}
          onSelect={handleSelectInvention}
          onSearch={handleSearch}
          selectedInvention={selectedInvention}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;