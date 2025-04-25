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
    excerpt: 'Looking for a reliable used car in the UAE? Discover the 10 most se...',
    author: 'Ahmad Rashad Al Zeer',
    date: '2025-04-24',
    category: 'Car Reviews'
  },
  {
    id: '3',
    image: '/thumb_car-dealer-5.jpg',
    title: 'How to Sell Your Car in the UAE from Abroad: Step-by-Step Guide',
    excerpt: 'Learn how to sell your car in the UAE from abroad with our step-by...',
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
  const sideArticles = filteredArticles.slice(1, 3);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-8 lg:py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
          Latest Car News and Reviews in UAE
        </h2>
        <button className="px-4 py-1.5 text-sm text-[#124d99] hover:bg-[#124d99] hover:text-white border border-[#124d99] rounded transition-colors whitespace-nowrap">
          View All
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 text-sm rounded-full text-gray-600  transition-colors cursor-pointer ${
              activeTab === category
                ? 'bg-[#F3F6FA]  font-bold  text-[#124d99] border-2 border-[#124d99] '
                : 'bg-white text-gray-600 border border-gray-200 hover:text-[#124d99]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {featuredArticle && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative  overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                layout="responsive"
                width={1000}
                height={800}
                quality={75}
              />
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-gray-900 line-clamp-2 hover:text-[#124d99] cursor-pointer transition-colors">
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
                <span>{new Date(featuredArticle.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: '2-digit',
                  day: '2-digit'
                })}</span>
              </div>
         
            </div>
          </div>

          <div className="space-y-6">
            {sideArticles.map((article) => (
              <div key={article.id} className="flex gap-4">
                <div className="relative w-[150px] aspect-[4/3] flex-shrink-0  overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-gray-900 line-clamp-2 hover:text-[#124d99] cursor-pointer transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>By: {article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit'
                    })}</span>
                  </div>
                  <button className="text-[#124d99] text-sm font-medium hover:underline">
                    Read More »
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 