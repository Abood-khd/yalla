'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import Image from 'next/image';
import { Tabs, Tab } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface CarData {
  name: string;
  price: string;
  location: string;
  mileage?: number;
  year: number;
  transmission: string;
  image: string;
  featured?: boolean;
  photos?: number;
}

const allCarsData: CarData[] = [
  { name: 'Used Nissan Murano 3.5 LE 2012', price: 'AED 12,900', location: 'Ajman', mileage: 186000, year: 2012, transmission: 'Automatic', image: '/webp_slide_show_67f92dc812e4d_2441972.webp', featured: true },
  { name: 'New Hyundai Tucson 1.6L T-GDI (FWD) 2025', price: 'AED 98,000', location: 'Dubai', mileage: 0, year: 2025, transmission: 'Automatic', image: '/webp_slide_show_67f92dc812e4d_2441972.webp', featured: true },
  { name: 'New Toyota Hiace 2024', price: 'AED 128,000', location: 'Dubai', mileage: 0, year: 2024, transmission: 'Manual', image: '/webp_slide_show_67f92dc812e4d_2441972.webp', featured: true, photos: 19 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_Mitsubishi_Xpander__2024_in_Dubai_1679435_1.webp', featured: false, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_Jetour__Dashing_2025_in_Dubai_1716700_13.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_Mitsubishi_Xpander__2024_in_Dubai_1679435_1.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  { name: 'New Toyota FJ Cruiser 4.0L 1 Final Edition 4WD 2023', price: 'AED 172,000', location: 'Dubai', mileage: 0, year: 2023, transmission: 'Automatic', image: '/webp_slide_show_IMG-20250306-WA0025.webp', featured: true, photos: 16 },
  // Add more cars as needed...
];

const PopularUsedCars = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const getCarsByTab = (tabIndex: number) => {
    switch (tabIndex) {
      case 0:
        return allCarsData.map(car => ({ ...car, featured: false }));
      case 1: 
        return allCarsData.filter(car => car.featured);
      case 2: 
        return allCarsData.map(car => ({ ...car, featured: false }));
      default:
        return allCarsData;
    }
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    arrows: true,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          rows: 1,

        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          rows: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          rows: 1,
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'relative', bottom: '-20px' }} suppressHydrationWarning={true}>
        <ul style={{ margin: '0', padding: '0' }} suppressHydrationWarning={true}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        suppressHydrationWarning={true}
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#4D7AB3',
          margin: '0 4px',
        }}
      />
    ),
  };

  const currentCars = getCarsByTab(tabValue);

  return (
    <div className="relative w-full lg:max-w-screen-1xl mx-auto lg:px-20 flex items-center gap-10 h-auto bg-[#f5f5f5] mt-10 py-10 lg:pt-28" suppressHydrationWarning={true}>
      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="flex px-2 md:px-4 lg:px-0  justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#000]">Popular Used Cars in UAE</h2>
          <button className="text-sm text-[#124d99] border border-[#124d99] rounded-md px-4 py-1 hover:bg-[#124d99] hover:text-white transition-colors" suppressHydrationWarning={true}>
            View All
          </button>
        </div>

        <div suppressHydrationWarning={true}>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="car tabs"
            sx={{
              borderBottom: '1px solid #e0e0e0',
              '& .MuiTabs-indicator': { backgroundColor: '#124d99' },
              '& .Mui-selected': { color: '#124d99' },
              mb: 3,
            }}
            className="px-2 md:px-4 lg:px-0 "
          >
            <Tab sx={{ color: '#757575', fontWeight: '600', textTransform: 'none' }} label="KAVAK CARS" />
            <Tab sx={{ color: '#757575', fontWeight: '600', textTransform: 'none' }} label="FEATURED CARS" />
            <Tab sx={{ color: '#757575', fontWeight: '600', textTransform: 'none' }} label="RECENTLY ADDED" />
          </Tabs>
        </div>

        <div className="relative mt-4 pb-10">
          <Slider {...settings}>
            {currentCars.map((car, index) => (
              <div key={index} className="px-2 pb-4">
                <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow h-[320px] w-full sm:w-[220px] mx-auto">
                  {tabValue === 1 && car.featured && (
                    <div className="absolute top-2 left-2 bg-[#9C2B2E] text-white text-[10px] font-semibold px-2 py-1 rounded z-10">
                      FEATURED
                    </div>
                  )}
                  <div className="relative h-[180px]">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 flex flex-col justify-between h-[140px]">
                    <div>
                      <h3 className="text-[13px] font-medium text-[#000] hover:text-[#124d99] line-clamp-2 mb-1 min-h-[40px]">
                        {car.name}
                      </h3>
                      <p className="text-md font-semibold text-[#124d99]">{car.price}</p>
                    </div>
                    <div className="text-xs text-gray-600">
                      <p className='text-[#868686] text-[12px] sm:text-[14px]'>{car.location}</p>
                      <div className="flex text-[#3b3b3b] justify-start items-center gap-2 sm:gap-4 mt-1">
                        <span className="text-center text-[12px] sm:text-[14px] text-[#3b3b3b]">{car.mileage?.toLocaleString() || '0'} | </span>
                        <span className="text-center text-[12px] sm:text-[14px] text-[#3b3b3b]">{car.transmission} | </span>
                        <span className="text-center text-[12px] sm:text-[14px] text-[#3b3b3b]">{car.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Right Ad */}
      <div className="hidden xl:block w-[250px] h-[530px] flex-shrink-0 mt-12">
        <Image src="/ads2.png" alt="ads2" width={260} height={100} className="rounded-md" />
      </div>
    </div>
  );
};

export default PopularUsedCars;
