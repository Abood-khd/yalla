'use client';

import Link from 'next/link';
import styles from './header.module.css'
import SearchBar from '../search-bar';

export default function Header() {
  return (
    <>
      <div className={`${`${styles.header}  relative w-full h-[55vh] md:h-[65vh] overflow-hidden`}`}>
        <div className="absolute inset-0 z-0">
          <img 
            src="/webp_spotlight_web_VW_Programmatic_Banners_UF_1920x500_YallaMotors.webp" 
            alt="Dubai skyline with car" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className={`${`${styles.header} absolute inset-0  bg-opacity-40`}`}></div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-12 lg:px-20">
          <div className="h-[60%] flex flex-col justify-between items-start lg:justify-center text-left gap-2">
            <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:mb-8  font-bold leading-tight">
              New Cars, Used Cars, Car Prices & Reviews in UAE
            </h1>

            <div className="flex flex-col text-white text-sm gap-1">
              <Link href="/" className="flex items-center gap-2 hover:underline">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                </svg>
                <span>The new Golf R</span>
              </Link>
              <Link href="/" className="hover:underline ml-7">
                Find out more
              </Link>
            </div>

          </div>
        </div>
      </div>

      <div className="bg-white w-full pt-4 pb-8 ">
        <div className="">
          <SearchBar placeholder="AI Supported Search" />
        </div>
      </div>
    </>
  );
}
