// src/components/Evolution.jsx

import React from 'react';

const Evolution = ({ evolutionSteps }) => (
  <div className="flex-1 min-w-[200px]">
    <h4 className="text-xl font-bold text-gray-700 mb-2">Alur Evolusi 🧬</h4>
    <ul className="list-disc pl-5 space-y-1 text-gray-700">
      {evolutionSteps.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ul>
  </div>
);

export default Evolution;