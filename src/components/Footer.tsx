'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        {/* Top Section with Logo and TOP button */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image src="/YM_Logo_EN_White-bf78471099be3125d9681c6e744a5fb3e977e305049e80b5bb1278c2f33b9744.svg" alt="YallaMotor" width={150} height={40} />
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">TOP</span>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Scroll to top"
            >
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform rotate-180"
              >
                <path 
                  d="M7 1L7 13M7 13L13 7M7 13L1 7" 
                  stroke="#1C1C1C" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium mb-3">ABOUT</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/advertise" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Advertise With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium mb-3">SITEMAP</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/used-cars-uae" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Used Cars for sale in UAE
                </Link>
              </li>
              <li>
                <Link href="/used-cars" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Used Cars
                </Link>
              </li>
              <li>
                <Link href="/compare-cars" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Compare New Cars
                </Link>
              </li>
              <li>
                <Link href="/car-reviews" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Car Reviews
                </Link>
              </li>
              <li>
                <Link href="/car-news" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Car News
                </Link>
              </li>
              <li>
                <Link href="/auto-companies" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Auto Companies
                </Link>
              </li>
              <li>
                <Link href="/new-car-guide" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Browse New Car Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* YallaMotor in the GCC Section */}
          <div className="space-y-4">
            <h3 className="text-md font-medium mb-3">YALLAMOTOR IN THE GCC</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/saudi-arabia" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Cars in Saudi Arabia
                </Link>
              </li>
              <li>
                <Link href="/egypt" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Cars in Egypt
                </Link>
              </li>
              <li>
                <Link href="/qatar" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Cars in Qatar
                </Link>
              </li>
              <li>
                <Link href="/oman" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Cars in Oman
                </Link>
              </li>
              <li>
                <Link href="/kuwait" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Cars in Kuwait
                </Link>
              </li>
              <li>
                <Link href="/bahrain" className="text-gray-400 hover:text-[#124d99] transition-colors">
                  Cars in Bahrain
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-md font-medium mb-3">SUBSCRIBE TO OUR NEWSLETTERS</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email to subscribe"
                  className="flex-1 px-4 py-2 bg-white text-gray-900 rounded-l focus:outline-none"
                />
                <button className="bg-[#124d99] px-6 py-2 text-white font-bold rounded-r hover:bg-[#0e3d7a] transition-colors">
                  JOIN
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-medium">FOLLOW YALLAMOTOR.COM</h3>
              <div className="flex gap-4">
                <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
                </Link>
                <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/twitter.svg" alt="Twitter" width={32} height={32} />
                </Link>
                <Link href="https://youtube.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/youtube.svg" alt="YouTube" width={32} height={32} />
                </Link>
                <Link href="https://linkedin.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
                </Link>
                <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
                </Link>
                <Link href="https://tiktok.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/tiktok.svg" alt="TikTok" width={32} height={32} />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-medium">Download Our Mobile App</h3>
              <div className="flex gap-4">
                <Link href="https://play.google.com/store" className="hover:opacity-80 transition-opacity">
                  <Image src="/android-da9911d9e7deb0d9ef2b0982cd44a2d0fb68b77f178acb3a18cfbfe1fa9818d8 (1).png" alt="Get it on Google Play" width={135} height={40} />
                </Link>
                <Link href="https://apps.apple.com" className="hover:opacity-80 transition-opacity">
                  <Image src="/ios-a1f3c308970e3168084c3b86f74eba2a24e53c9b9765030dac0e0adb58a8da73 (1).png" alt="Download on the App Store" width={135} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-800">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-gray-400 text-sm">
              YallaMotor.com © 2025. All Rights Reserved.  <Link href="/terms" className="ml-3   text-gray-400 hover:text-white transition-colors text-sm">
              Terms
            </Link>
            </span>
          </div>
          <div className="flex items-center gap-4">
          
            <Link href="/ar" className="text-white transition-colors text-sm font-bold">
              العربية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 