'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import HydrationFix from './HydrationFix';

const DynamicTabs = dynamic(() => import('@mui/material/Tabs').then(mod => mod.default), { ssr: false });
const DynamicTab = dynamic(() => import('@mui/material/Tab').then(mod => mod.default), { ssr: false });

const transmissionIcons = {
  automatic: '/icons/automatic.svg',
  manual: '/icons/manual.svg',
  cvt: '/icons/cvt.svg'
};

const fuelIcons = {
  petrol: '/icons/petrol.svg',
  diesel: '/icons/diesel.svg',
  electric: '/icons/electric.svg',
  hybrid: '/icons/hybrid.svg'
};

const bodyTypes = [
  { type: 'SUV', icon: '/slide_show_01.png' },
  { type: 'Sedan', icon: '/slide_show_01.png' },
  { type: 'Coupe', icon: '/slide_show_01.png' },
  { type: 'Hatchback', icon: '/slide_show_01.png' },
  { type: 'Convertible', icon: '/slide_show_01.png' },
  { type: 'Pickup Truck', icon: '/slide_show_01.png' },
  { type: 'Wagon', icon: '/slide_show_01.png' },

];

const cities = [
  'All Cities',
  'Abu Dhabi',
  'Ajman',
  'Al Ain',
  'Dubai',
  'Fujairah',
  'Ras Al Khaimah',
  'Sharjah'
];

const years = [
  '2023', '2022', '2021', '2020',
  '2019', '2018', '2017', '2016',
  '2015', '2014', '2013', '2012'
];

export default function BrowseByCategory() {
  const [selectedTab, setSelectedTab] = React.useState('BODY STYLE');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'BODY STYLE':
        return (
          <div className="w-full bg-[#fff] lg:bg-transparent  grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-10 md:max-w-[950px] mt-5 md:mt-6  lg:mt-8">
            {bodyTypes.map((item) => (
              <div key={item.type} 
                className="bg-white w-[140px] sm:w-[120px] lg:shadow-lg h-[100px] sm:h-[111px] rounded-lg flex flex-col items-center justify-center transition-shadow cursor-pointer hover:shadow-md"
              >
                <div className="w-16 sm:w-20 h-10 sm:h-12 relative mb-2">
                  <Image
                    src={item.icon}
                    alt={item.type}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 hover:text-[#124d99]">{item.type}</span>
              </div>
            ))}
          </div>
        );

      case 'TRANSMISSION':
        return (
          <div className="max-w-[950px] flex  sm:flex-row justify-center sm:justify-evenly items-center gap-8 sm:gap-16 lg:gap-24 mt-8 sm:mt-12 lg:mt-20">
            {Object.entries(transmissionIcons).map(([type, icon]) => (
              <div key={type} className="flex flex-col items-center cursor-pointer">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 relative mb-2">
                  <Image
                    src={icon}
                    alt={type}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 capitalize">{type}</span>
              </div>
            ))}
          </div>
        );

      case 'FUEL TYPE':
        return (
          <div className="max-w-[950px] flex flex-wrap sm:flex-row justify-center gap-6 sm:gap-12 lg:gap-24 mt-8 sm:mt-12 lg:mt-20">
            {Object.entries(fuelIcons).map(([type, icon]) => (
              <div key={type} className="flex flex-col items-center cursor-pointer">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 relative mb-2">
                  <Image
                    src={icon}
                    alt={type}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 capitalize">{type}</span>
              </div>
            ))}
          </div>
        );

      case 'YEAR':
        return (
          <div className="max-w-[950px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {years.map((year) => (
              <div key={year} 
                className="rounded-full border border-gray-300 px-6 sm:px-8 lg:px-10 py-1 text-center cursor-pointer hover:border-blue-500 transition-colors w-fit mx-auto"
              >
                <span className="text-xs sm:text-sm text-gray-600">{year}</span>
              </div>
            ))}
          </div>
        );

      case 'CITY':
        return (
          <div className="max-w-[950px] grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 mt-6 sm:mt-8">
            {cities.map((city) => (
              <div key={city} 
                className="rounded-full border border-gray-300 px-6 sm:px-8 lg:px-10 py-1 text-center cursor-pointer hover:border-blue-500 transition-colors w-fit mx-auto"
              >
                <span className="text-xs sm:text-sm text-gray-600">{city}</span>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 bg-[#fff] lg:bg-[#f5f5f5] w-full lg:px-18" suppressHydrationWarning={true}>
      <h1 className="text-[18px] sm:text-2xl font-bold mb-4 mt-5 md:mt-0 sm:mb-6">Browse Used Cars in UAE by Category</h1>
      
      <HydrationFix
        render={(isMounted) => 
          isMounted ? (
            <DynamicTabs
              value={selectedTab}
              onChange={handleTabChange}
              aria-label="car categories"
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTabs-indicator': {
                  backgroundColor: '#1976d2',

                },
                '& .Mui-selected': {
                  color: '#1976d2 !important',
                },
                '& .MuiTab-root': {
                  fontSize: { xs: '12px', sm: '14px' },
                  minWidth: { xs: 'auto', sm: '120px' },
                  padding: { xs: '6px 12px', sm: '12px 16px' },
                }
              }}
            >
              {['BODY STYLE', 'FUEL TYPE', 'TRANSMISSION', 'YEAR', 'CITY'].map((tab) => (
                <DynamicTab 
                  key={tab}
                  label={tab}
                  value={tab}
                  sx={{ 
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    color: '#666',
                  }} 
                />
              ))}
            </DynamicTabs>
          ) : null
        }
      />

      <div className="mt-4 sm:mt-6 overflow-x-auto">
        {renderContent()}
      </div>
    </div>
  );
} 