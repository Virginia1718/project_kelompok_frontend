import React from 'react';
import Logo from './Logo';
import Generations from './Generations';

const Header = ({ onSelectGen, selectedGen }) => (
  // Menggunakan Tailwind untuk styling header
  <header className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md">
    <div className="flex items-center">
        <Logo />
        <h1 className="ml-3 text-2xl font-bold tracking-wide">Katalog IPTEK</h1>
    </div>
    <Generations onSelectGen={onSelectGen} selectedGen={selectedGen} /> 
  </header>
);

export default Header;