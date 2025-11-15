// src/components/Generations.jsx

import React from 'react';
import { generations } from '../data/iptekData';

const GenerationButton = ({ id, name, onSelect, isSelected }) => (
  <button 
    onClick={() => onSelect(id)} 
    // Menggunakan kelas kondisional untuk styling
    className={`
      mx-1 px-3 py-2 border rounded-md cursor-pointer text-sm transition duration-150 ease-in-out
      ${isSelected 
        ? 'bg-teal-600 text-white border-teal-700 font-semibold shadow-inner' // Active style
        : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200' // Default style
      }
    `}
  >
    {name}
  </button>
);

const Generations = ({ onSelectGen, selectedGen }) => (
  <div className="flex space-x-2">
    <GenerationButton 
        id={null} 
        name="Semua" 
        onSelect={onSelectGen} 
        isSelected={selectedGen === null} 
    />
    
    {generations.map(gen => (
      <GenerationButton 
        key={gen.id} 
        id={gen.id} 
        name={gen.name} 
        onSelect={onSelectGen} 
        isSelected={selectedGen === gen.id} 
      />
    ))}
  </div>
);

export default Generations;