"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface BudgetCategory {
  price: number;
  count: string;
}

export default function UsedCarsByBudget() {
  const categories: BudgetCategory[] = [
    { price: 5000, count: "60+" },
    { price: 10000, count: "1,200+" },
    { price: 12000, count: "2,200+" },
    { price: 15000, count: "3,300+" },
    { price: 20000, count: "4,200+" },
    { price: 25000, count: "7,400+" },
    { price: 30000, count: "6,500+" },
    { price: 40000, count: "4,600+" },
    { price: 50000, count: "7,400+" },
    { price: 75000, count: "5,000+" },
    { price: 100000, count: "3,000+" },
    { price: 150000, count: "2,500+" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          vertical: true,
        },
      },
      {
        breakpoint: 9999,
        settings: "unslick",
      },
    ],
  };

  return (
    <div className="mx-auto w-full px-4 lg:px-16 py-10" suppressHydrationWarning={true}>
      <h1 className="lg:text-2xl text-xl font-bold text-start mb-4">
        Used Cars By Budget in UAE
      </h1>

      <div className="w-[90%]">
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[6px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className="mt-5 rounded-full border border-gray-200 px-2.5 py-[3px] hover:shadow-md transition-colors duration-200 cursor-pointer text-center"
            >
              <span className="lg:text-[13px] text-gray-700 text-[11px] whitespace-nowrap font-medium">
                Used Cars Under {category.price.toLocaleString()} AED in UAE{" "}
                <span className="text-blue-600">{category.count}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="block md:hidden mt-5 w-full max-w-[360px] mx-auto">
  <Slider {...sliderSettings}>
    {categories.map((category, index) => (
      <div
        key={index}
        className="flex flex-col items-center rounded-full border border-gray-200 px-2.5 py-[8px] hover:shadow-md transition-colors duration-200 cursor-pointer text-center mx-auto mb-3"
      >
        <span className="text-[12px] text-gray-700 whitespace-nowrap font-medium">
          Used Cars Under {category.price.toLocaleString()} AED in UAE{" "}
          <span className="text-blue-600">{category.count}</span>
        </span>
      </div>
    ))}
  </Slider>
</div>

      </div>
    </div>
  );
}
