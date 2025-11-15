// src/components/CardInfo.jsx

import React from 'react';
import Evolution from './Evolution';
import TypeEffect from './TypeEffect';
import Logo from './Logo';

const CardInfo = ({ invention }) => {
  if (!invention) return <div className="p-5 text-gray-500 italic">Silakan pilih inovasi dari daftar di sebelah kiri untuk melihat detail.</div>;

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-teal-700 border-b border-dashed border-gray-300 pb-3 mb-4">{invention.name}</h2>
      <p className="mb-4"><strong>Era:</strong> {invention.era}</p>
      <p className="leading-relaxed text-gray-700 mb-6">{invention.description}</p>
      
      <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-6 border-t pt-6">
        
        {/* Detail Inovasi (Logo) */}
        <div className="min-w-[150px]">
            <Logo />
            <h3 className="mt-2 text-lg font-semibold text-gray-600">Detail Inovasi</h3>
        </div>
        
        {/* Evolution dan TypeEffect dalam tata letak yang fleksibel */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
            <Evolution evolutionSteps={invention.evolution} />
            <TypeEffect effects={invention.effects} />
        </div>
      </div>
    </div>
  );
};

export default CardInfo;