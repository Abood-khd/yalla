'use client';

import dynamic from 'next/dynamic';
import React from 'react';
// import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HydrationFix from '@/app/utils/HydrationFix';
const DynamicRating = dynamic(() => 
  import('@mui/material').then(mod => mod.Rating), 
  { ssr: false }
);

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = dynamic(() => import('react-slick'), { ssr: false });


const carData = [
  { name: 'Geely Starray 2025', price: 'AED 84,900 - AED 104,900', rating: 4.5, image: 'slide_show_Hyundai_Elamtra_Exterior_01.jpg', tag: 'CAR OF THE WEEK' },
  { name: 'Toyota Land Cruiser Prado ', price: 'AED 199,900', rating: 4.7, image: 'slide_show_01.png' },
  { name: 'Hyundai Elantra ', price: 'AED 76,250 - AED 132,000', rating: 4.0, image: 'slide_show_01.png' },
  { name: 'Mitsubishi Pajero 2025', price: 'Price Coming Soon', rating: 1.0, image: 'slide_show_01.png' },
  { name: 'Toyota Land Cruiser 2025', price: 'AED 238,900 - AED 412,900', rating: 4.8, image: 'slide_show_01.png' },
  { name: 'Hyundai Tucson 2025', price: 'AED 96,000 - AED 126,000', rating: 2.3, image: 'slide_show_01.png' },
  { name: 'Toyota Fortuner 2025', price: 'AED 126,900 - AED 172,900', rating: 4.6, image: 'slide_show_01.png' },
  { name: 'Mitsubishi Lancer EX 2025', price: 'Price Coming Soon', rating: 4.1, image: 'slide_show_01.png' },   
  { name: 'Mitsubishi Lancer EX 2025', price: 'Price Coming Soon', rating: 4.1, image: 'slide_show_01.png' },   
  { name: 'Mitsubishi Lancer EX 2025', price: 'Price Coming Soon', rating: 4.1, image: 'slide_show_01.png' },   
  { name: 'Mitsubishi Lancer EX 2025', price: 'Price Coming Soon', rating: 4.1, image: 'slide_show_01.png' },   
  { name: 'Mitsubishi Lancer EX 2025', price: 'Price Coming Soon', rating: 4.1, image: 'slide_show_01.png' },   
];



const PopularElectric = () => {


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
           slidesToShow: 2,
           slidesToScroll: 2,
           arrows: false,
           dots: false,
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

  return (
    <div className="relative w-full lg:max-w-screen-1xl mx-auto lg:px-20  flex items-start gap-10 mt-5  h-auto" suppressHydrationWarning={true}>
      <div className="flex-1 overflow-hidden">
        <div className="flex px-2 md:px-4 lg:px-0  justify-between items-center mb-4">
          <h2 className="md:text-2xl font-bold text-[#000]">Popular Electric Cars in UAE          </h2>
          <button className="text-sm text-[#124d99] border border-[#124d99] rounded-md px-4 py-1 shadow-md font-medium" suppressHydrationWarning={true}>View All</button>
        </div>

   

        <div className="relative mt-2 lg:h-[74vh]">
          <Slider {...settings} >
            {carData.map((car, index) => (
              <div key={index} className="p-3">
                <div className="relative bg-white  rounded-lg shadow-md overflow-hidden w-full max-w-[220px] mx-auto">
                  {car.tag && (
                    <div className="absolute top-0 left-0 bg-orange-400 text-white text-xs font-bold px-2 py-1 z-10">
                      {car.tag}
                    </div>
                  )}
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-[100px]  object-contain border-b border-[#e0e0e0]"
                  />
                  <div className="p-3 flex flex-col gap-3">
                    <p className="text-[13px] text-[#000] hover:text-[#124d99]">
                      {car.name}
                    </p>
                    <p className="text-xs mb-1 text-[#124d99] font-semibold">
                      {car.price}
                    </p>
                    <div className="text-xs">
                      <HydrationFix render={() => (
                        <DynamicRating name="read-only" sx={{ fontSize: '13px', color: '#FA7026' }} value={car.rating} readOnly />
                      )} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="hidden xl:block w-[250px] h-[530px] flex-shrink-0  mt-12">
        {/* <Image src="/ads.png" alt="ads" width={260} height={100} className="rounded-md " /> */}
      </div>
    </div>
  );
};

export default PopularElectric; 