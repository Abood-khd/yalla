'use client';

import React from 'react';
import Image from 'next/image';

interface Dealer {
  id: string;
  logo: string;
  name: string;
  width: number;
  height: number;
  title: string;
}

const dealers: Dealer[] = [
  {
    id: '1',
    logo: '/SUB-BRAND_LOGO__USED_CARS__EN1 (1).png',
    name: 'Al-Futtaim Automall',
    width: 120,
    height: 40,
    title: 'Al-Futtaim Automall'
  },
  {
    id: '2',
    logo: '/rostmani (1).png',
    name: 'AW Rostamani Pre-Owned Cars',
    width: 120,
    height: 40,
    title: 'AW Rostamani Pre-Owned Cars'
  },
  {
    id: '3',
    logo: '/SUB-BRAND_LOGO__USED_CARS__EN1 (1).png',
    name: 'Auto Central',
    width: 120,
    height: 40,
    title: 'Auto Central'
  },
  {
    id: '4',
    logo: '/Swaidan_motors (1).jpg',
    name: 'Cars24',
    width: 120,
    height: 40,
    title: 'Cars24'
  },
  {
    id: '5',
    logo: '/Swaidan_motors (1).jpg',
    name: 'Al Naboodah - Swaidan Motors',
    width: 120,
    height: 40,
    title: 'Al Naboodah - Swaidan Motors'
  }
];

export default function CertifiedDealers() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-8 lg:py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
          Certified Used Car Dealers in UAE
        </h2>
        <button className="px-4 py-1.5 text-sm text-[#124d99] hover:bg-[#124d99] hover:text-white border border-[#124d99] rounded transition-colors whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {dealers.map((dealer) => (
          <div
            key={dealer.id}
            className="bg-white rounded-md border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 cursor-pointer"
          >
            <div className="flex items-center gap-4 py-4">
              <div className="flex-shrink-0 w-[120px] h-[40px] relative">
                <Image
                  src={dealer.logo}
                  alt={dealer.name}
                  layout="responsive"
                  width={dealer.width}
                  height={dealer.height}
                  quality={75}
                />
              </div>
              <h3 className="text-[#124d99] text-sm font-bold line-clamp-2">
                {dealer.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (min-width: 640px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media (min-width: 1280px) {
          .container {
            max-width: 1200px;
          }
        }
      `}</style>
    </div>
  );
} 