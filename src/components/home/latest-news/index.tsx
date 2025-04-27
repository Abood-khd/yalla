'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Article {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
}

const articles: Article[] = [
  {
    id: '1',
    image: '/listing_main_car-sell-meeting.jpg',
    title: '14 Costly Mistakes to Avoid When Buying a Used Car in the UAE',
    excerpt: 'Avoid costly mistakes when buying a used car in the UAE! This guide...',
    author: 'Ahmad Rashad Al Zeer',
    date: '2025-04-24',
    category: 'Car News'
  },
  {
    id: '2',
    image: '/thumb_Cover-Image-The-New-Toyota-Land-Cruiser-2024.jpg',
    title: 'Top 10 Most Searched Used Cars in UAE Right Now',
    excerpt: 'Looking for a reliable used car in the UAE? Discover the 10 most searched...',
    author: 'Ahmad Rashad Al Zeer',
    date: '2025-04-24',
    category: 'Car Reviews'
  },
  {
    id: '3',
    image: '/thumb_car-dealer-5.jpg',
    title: 'How to Sell Your Car in the UAE from Abroad: Step-by-Step Guide',
    excerpt: 'Learn how to sell your car in the UAE from abroad with our step-by-step guide...',
    author: 'Ahmad Rashad Al Zeer',
    date: '2025-04-23',
    category: 'YallaMotor Tips'
  },
  {
    id: '4',
    image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
    title: 'Used Cars in Dubai: Is a Private Seller or Dealer Better?',
    excerpt: 'Private seller vs dealer: Which is better for buying used cars in Dubai?',
    author: 'Ahmad Rashad Al Zeer',
    date: '2025-04-22',
    category: 'New Launches'
  }
];

const categories = ['All', 'Car News', 'New Launches', 'Car Reviews', 'YallaMotor Tips'];

export default function LatestNews() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredArticles = activeTab === 'All'
    ? articles
    : articles.filter(article => article.category === activeTab);

  const featuredArticle = filteredArticles[0];
  const sideArticles = filteredArticles.slice(1, 4);

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-20 py-8" suppressHydrationWarning>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
          Latest Car News and Reviews in UAE
        </h2>
        <button className="px-4 py-1 text-sm sm:text-base text-[#124d99] hover:bg-[#124d99] hover:text-white border border-[#124d99] rounded transition-colors">
          View All
        </button>
      </div>

      <div className="flex gap-2 sm:gap-3 overflow-x-auto mb-8 scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`flex-shrink-0 px-4 sm:px-6 py-2 text-sm sm:text-base rounded-full border transition-colors whitespace-nowrap ${
              activeTab === category
                ? 'bg-[#F3F6FA] text-[#124d99] border-[#124d99] font-bold'
                : 'bg-white text-gray-600 border-gray-200 hover:text-[#124d99]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {featuredArticle && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="relative w-full h-60 sm:h-96 overflow-hidden rounded-lg">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900 hover:text-[#124d99] cursor-pointer line-clamp-2">
                {featuredArticle.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {featuredArticle.excerpt}
              </p>
              <button className="text-[#124d99] text-sm font-bold hover:underline">
                Read More »
              </button>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>By: {featuredArticle.author}</span>
                <span>•</span>
                <span>{new Date(featuredArticle.date).toLocaleDateString('en-US')}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {sideArticles.map((article) => (
              <div key={article.id} className="flex gap-4 items-start">
                <div className="relative w-[100px] h-[75px] flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 100px"
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 hover:text-[#124d99] cursor-pointer line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-xs line-clamp-2">{article.excerpt}</p>
                  <button className="text-[#124d99] text-xs font-bold hover:underline">
                    Read More »
                  </button>
                  <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-1">
                    <span>By: {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString('en-US')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
