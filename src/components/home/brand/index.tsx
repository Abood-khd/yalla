"use client";

import { useState } from "react";

const brandsData = [
  { id: 1, image: "/image.png" },
  { id: 2, image: "/image.png" },
  { id: 3, image: "/image.png" },
  { id: 4, image: "/image.png" },
  { id: 5, image: "/image.png" },
  { id: 6, image: "/image.png" },
  { id: 7, image: "/image.png" },
  { id: 8, image: "/image.png" },
  { id: 9, image: "/image.png" },
  { id: 10, image: "/image.png" },
  { id: 11, image: "/image.png" },
  { id: 12, image: "/image.png" },
  { id: 13, image: "/image.png" },
  { id: 14, image: "/image.png" },
  { id: 15, image: "/image.png" },
  { id: 16, image: "/image.png" },
  { id: 17, image: "/image.png" },
  { id: 18, image: "/image.png" },
];

const Brands = () => {
  const [showAll, setShowAll] = useState(false);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  const visibleBrands = showAll
    ? brandsData
    : isDesktop
    ? brandsData.slice(0, 16) // ديسكتوب: 2 صفوف × 8 أعمدة = 16
    : brandsData.slice(0, 6); // موبايل: 2 صفوف × 3 أعمدة = 6

  return (
    <div className="bg-gray-50 p-10 lg:px-20 mt-10" suppressHydrationWarning={true}>
      <h2 className="text-start text-[16px] max-w-[300px] lg:max-w-full lg:text-3xl text-center lg:text-2xl font-bold lg:text-start mb-10 text-[#000]">
        Prices, Specs & Features of Popular Brands in UAE
      </h2>

      <div className="flex justify-center items-center mb-12">
        <div className="shadow-lg rounded-lg text-center border-gray-200">
          <img
            src="/Screenshot 2025-04-23 150153.png"
            alt="Geely"
            className="object-contain w-[150px] h-[150px]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {visibleBrands.map((brand) => (
          <img
            key={brand.id}
            src={brand.image}
            alt="image-brand"
            className="mx-auto mb-3 w-full h-full object-contain"
            loading="lazy"
          />
        ))}
      </div>

      {brandsData.length > (isDesktop ? 16 : 6) && (
        <div className="flex lg:justify-start justify-center mt-10">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-[#124d99] text-sm border border-[#124d99] px-5 py-1 rounded-sm shadow-md transition"
            suppressHydrationWarning={true}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Brands;
