import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const bodyStyles = [
  { name: 'Sedan', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'Hatchback', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'Convertible', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'Van', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'SUV', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'Coupe', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'Pickup Truck', image: '/Screenshot 2025-04-22 191756.png' },
  { name: 'Wagon', image: '/Screenshot 2025-04-22 191756.png' },
];



const NewCarDropdown = () => {
  const [activeContent, setActiveContent] = useState<'bodyStyles' | 'brands'>('bodyStyles');



  return (
    <div className="fixed top-[71px] left-1/2 -translate-x-1/2 w-[700px] bg-white rounded-[12px] shadow-lg">
      <div className="flex w-[700px]">
        {/* Left Column - Navigation */}
        <div className="bg-[#f8f9fa] py-6 rounded-l-[12px] w-[200px]">
          <div className="space-y-4 px-6">
            <Link 
              href="/new-cars/guide" 
              className={`block text-[14px] px-6 py-2 -mx-6 ${
                activeContent === 'bodyStyles' 
                  ? 'text-[#0d6efd] bg-white' 
                  : 'text-[#475569] hover:text-[#0d6efd] hover:bg-white hover:rounded-r-lg hover:mr-2'
              }`}
              onMouseEnter={() => setActiveContent('bodyStyles')}
            >
              Browse New Car 
            </Link>
            <Link 
              href="/new-cars/search" 
              className={`block text-[14px] px-6 py-2 -mx-6 ${
                activeContent === 'brands'
                  ? 'text-[#0d6efd] bg-white'
                  : 'text-[#475569] hover:text-[#0d6efd] hover:bg-white hover:rounded-lg'
              }`}
              onMouseEnter={() => setActiveContent('brands')}
            >
              Search New Cars
            </Link>
            <Link 
              href="/new-cars/compare" 
              className="block text-[#475569] hover:text-[#0d6efd] text-[14px] px-6 py-2 -mx-6 hover:bg-white"
            >
              Compare New Cars
            </Link>
            <Link 
              href="/car-prices" 
              className="block text-[#475569] hover:text-[#0d6efd] text-[14px] px-6 py-2 -mx-6 hover:bg-white"
            >
              Car Prices
            </Link>
            <Link 
              href="/popular-cars" 
              className="block text-[#475569] hover:text-[#0d6efd] text-[14px] px-6 py-2 -mx-6 hover:bg-white whitespace-nowrap"
            >
              Popular New Cars
            </Link>
            <Link 
              href="/car-dictionary" 
              className="block text-[#475569] hover:text-[#0d6efd] text-[14px] px-6 py-2 -mx-6 hover:bg-white whitespace-nowrap"
            >
              Car Dictionary
            </Link>
          </div>
          <div className="mt-8 px-6">
            <Link 
              href="/sell-car" 
              className="text-[#22c55e] text-[14px] hover:underline whitespace-nowrap"
            >
              Looking to sell your car?
            </Link>
          </div>
        </div>
                
        {/* Right Column - Dynamic Content */}
        <div className="flex flex-1">
          {activeContent === 'bodyStyles' && (
            <>
              <div className="flex-1 py-8 px-6 ">
                <h3 className=" text-base text-[14px] text-[#b4bac5] font-bold mb-6">Browse Cars by Body Style</h3>
                <div className="grid grid-cols-2 gap-3">
                  {bodyStyles.slice(0, 8).map((style, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-3 hover:shadow-lg transition-shadow"
                    >
                      <Link 
                        href={`/new-cars/${style.name.toLowerCase()}`}
                        className="flex items-center gap-3"
                      >
                        <div className="relative w-[60px] h-[35px]">
                          <Image
                            src={style.image}
                            alt={style.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/new-cars/body-styles" 
                  className="text-[#0d6efd] text-sm mt-6 inline-flex items-center hover:underline"
                >
                  See all Body Styles →
                </Link>
              </div>
              <div className="flex-1 py-8 px-6">
                <h3 className="text-[#b4bac5] text-base text-[14px] font-bold mb-6">Browse Cars by Brand</h3>
                <div className="grid grid-cols-2 gap-3">
                  {bodyStyles.slice(0, 8).map((style, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg border border-[#e5e7eb] shadow-sm p-3 hover:shadow-lg transition-shadow"
                    >
                      <Link 
                        href={`/new-cars/${style.name.toLowerCase()}`}
                        className="flex items-center gap-3"
                      >
                        <div className="relative w-[60px] h-[35px]">
                          <Image
                            src={style.image}
                            alt={style.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <Link 
                  href="/new-cars/brands" 
                  className="text-[#0d6efd] text-sm mt-6 inline-flex items-center hover:underline"
                >
                  See all Brands →
                </Link>
              </div>
            </>
          )}
       
       
        </div>
      
      
      </div>
    </div>
  );
};

export default NewCarDropdown; 