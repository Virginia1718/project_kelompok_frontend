// src/components/TypeEffect.jsx

import React from 'react';

const TypeEffect = ({ effects }) => (
  <div className="flex-2 min-w-[350px]">
    <h4 className="text-xl font-bold text-gray-700 mb-2">Dampak Lintas Sektor 📈</h4>
    <table className="border-collapse w-full text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2 text-left w-1/3">Sektor</th>
          <th className="border border-gray-300 p-2 text-left w-2/3">Efek</th>
        </tr>
      </thead>
      <tbody>
        {effects.map((effect, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border border-gray-300 p-2 font-semibold text-gray-800">{effect.type}</td>
            <td className="border border-gray-300 p-2 text-gray-700">{effect.effect}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TypeEffect;