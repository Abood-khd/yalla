'use client';

import React from 'react';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ArrowProps {
  onClick?: () => void;
}

const carBrands = [
  {
    logo: '/brands/toyota.svg',
    name: 'Toyota Price in UAE'
  },
  {
    logo: '/brands/nissan.svg',
    name: 'Nissan Price in UAE'
  },
  {
    logo: '/brands/mercedes.svg',
    name: 'Mercedes-Benz '
  },
  {
    logo: '/brands/hyundai.svg',
    name: 'Hyundai Price in UAE'
  },
  {
    logo: '/brands/mitsubishi.svg',
    name: 'Mitsubishi Price'
  },
  {
    logo: '/brands/ford.svg',
    name: 'Ford Price in UAE'
  },
  {
    logo: '/brands/kia.svg',
    name: 'Kia Price in UAE'
  }, {
    logo: '/brands/toyota.svg',
    name: 'Toyota Price in UAE'
  }, {
    logo: '/brands/toyota.svg',
    name: 'Toyota Price in UAE'
  },
  
];

function NextArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="slick-arrow slick-next custom-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '10px',
        top: '45%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.18)',
        cursor: 'pointer',
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: '0 0 0 0',
        overflow: 'hidden'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateX(1px)'
      }}>
        <KeyboardArrowRightIcon sx={{ 
          fontSize: 32,
          color: '#124d99',
          margin: 0,
          padding: 0
        }} />
      </div>
    </div>
  );
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <div
      className="slick-arrow slick-prev custom-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        left: '10px',
        top: '45%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.18)',
        cursor: 'pointer',
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        margin: '0 0 0 0',
        overflow: 'hidden'
      }}
    >
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateX(-2px)'
      }}>
        <KeyboardArrowLeftIcon sx={{ 
          fontSize: 32,
          color: '#124d99',
          margin: 0,
          padding: 0
        }} />
      </div>
    </div>
  );
}

export default function PopularCarPrices() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4  sm:px-6 lg:px-10 py-6 lg:py-10 lg:px-18">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
          Popular New Car Prices in UAE
        </h2>
        <button className="text-sm text-[#124d99] border border-[#124d99] rounded-md px-4 py-1 hover:bg-[#124d99] hover:text-white transition-colors">
          View All
        </button>
      </div>

      <div className="relative">
        <Slider ref={sliderRef} {...settings} className="brand-slider">
          {carBrands.map((brand, index) => (
            <div key={index} className="px-2">
              <div className="bg-white border border-gray-200 h-28  rounded-lg p-2 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
                <div className="w-20 h-20 relative mb-3">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-700 text-center">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .brand-slider .slick-track {
          margin-left: 0;
          padding: 10px 0;
        }

        .brand-slider .custom-dots {
          bottom: -30px;
        }

        .brand-slider .custom-dots li {
          margin: 0 4px;
        }

        .brand-slider .custom-dots li button {
          width: 18px;
          height: 18px;
          padding: 10px;
        }

        .brand-slider .custom-dots li button:before {
          width: 18px;
          height: 18px;
          color: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .brand-slider .custom-dots li.slick-active button:before {
          color: #124d99;
          opacity: 1;
        }

        .brand-slider {
          padding: 0 25px;
          margin: 0 -25px;
        }

        .custom-arrow:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
        }

        .custom-arrow svg {
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
} 