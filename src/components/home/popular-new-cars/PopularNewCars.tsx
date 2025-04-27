 'use client';

import React from 'react';

const carData = [
  { name: 'Geely Starray 2025', price: 'AED 84,900 - AED 104,900', image: 'slide_show_Hyundai_Elamtra_Exterior_01.jpg', tag: 'CAR OF THE WEEK' },
  { name: 'Toyota Land Cruiser Prado ', price: 'AED 199,900', image: 'slide_show_01.png' },
  { name: 'Hyundai Elantra ', price: 'AED 76,250 - AED 132,000', image: 'slide_show_01.png' },
  { name: 'Mitsubishi Pajero 2025', price: 'Price Coming Soon', image: 'slide_show_01.png' },
];

export default function PopularNewCars() {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular New Cars in UAE</h2>
        <button className="text-sm text-blue-600 border border-blue-600 rounded-md px-4 py-1 shadow-md font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {carData.map((car, index) => (
          <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden">
            {car.tag && (
              <div className="absolute top-0 left-0 bg-orange-400 text-white text-xs font-bold px-2 py-1 z-10">
                {car.tag}
              </div>
            )}
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-32 object-contain border-b border-gray-200"
            />
            <div className="p-3">
              <p className="text-sm text-gray-900 hover:text-blue-600 mb-1">
                {car.name}
              </p>
              <p className="text-xs text-blue-600 font-semibold">
                {car.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
