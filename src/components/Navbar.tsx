"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import NewCarDropdown from './NewCarDropdown';
import UserDrawer from './UserDrawer';

interface Country {
  code: string;
  name: string;
  flagSrc: string;
}

const countries: Country[] = [
  { code: 'UAE', name: 'UAE', flagSrc: '/images/flags/uae.svg' },
  { code: 'KSA', name: 'KSA', flagSrc: '/images/flags/ksa.svg' },
  { code: 'EGYPT', name: 'EGYPT', flagSrc: '/images/flags/egypt.svg' },
  // { code: 'QATAR', name: 'QATAR', flagSrc: '/images/flags/qatar.svg' },
  // { code: 'OMAN', name: 'OMAN', flagSrc: '/images/flags/oman.svg' },
  // { code: 'KUWAIT', name: 'KUWAIT', flagSrc: '/images/flags/kuwait.svg' },
  // { code: 'BAHRAIN', name: 'BAHRAIN', flagSrc: '/images/flags/bahrain.svg' },
];

const Navbar = () => {
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [isNewCarDropdownOpen, setIsNewCarDropdownOpen] = useState(false);
  const [isUsedCarDropdownOpen, setIsUsedCarDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryDropdownOpen(false);
  };

  const closeDropdown = () => {
    setIsCountryDropdownOpen(false);
    setIsUserDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsCountryDropdownOpen(false);
    setIsUserDropdownOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white text-[#0f1420] shadow-md' 
        : 'bg-transparent text-white'
    }`}>
      {/* Top Navigation Bar */}
      <div className="container mx-auto px-4 lg:px-18">
        <div className="flex items-center justify-between h-[71px]">
          {/* Logo and Country Selector - Left Side */}
          <div className="flex items-center">
            <Link href="/" className="nav-item">
              <div className="relative w-[150px] h-[40px]">
                <Image
                  src={scrolled 
                    ? "/YM_Logo_EN_Colored-e31d5b1f77f70dcefaa59943ba84c4f5e036ee1db5ba29c1f734321d15e103eb (1).svg"
                    : "/YM_Logo_EN_White-bf78471099be3125d9681c6e744a5fb3e977e305049e80b5bb1278c2f33b9744.svg"
                  }
                  alt="YallaMotor"
                  fill
                  priority
                  sizes="150px"
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
            </Link>
            <div 
              className={`hidden md:flex country-selector ${isCountryDropdownOpen ? 'active' : ''}`}
              onMouseEnter={() => {
                closeAllDropdowns();
                setIsCountryDropdownOpen(true);
              }}
              onMouseLeave={() => setIsCountryDropdownOpen(false)}
            >
              <div className="country-flag">
                <Image
                  src={selectedCountry.flagSrc}
                  alt={`${selectedCountry.name} flag`}
                  fill
                  sizes="22px"
                  className="object-cover rounded-[4px]"
                />
              </div>
              <span className="text-sm font-medium tracking-wide">{selectedCountry.code}</span>
              <MdKeyboardArrowDown className={`w-5 h-5 transition-transform duration-200 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
              
              {/* Country Dropdown */}
              {isCountryDropdownOpen && (
                <div className="country-dropdown">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      className="country-option"
                      onClick={() => handleCountrySelect(country)}
                    >
                      <div className="country-flag">
                        <Image
                          src={country.flagSrc}
                          alt={`${country.name} flag`}
                          fill
                          sizes="22px"
                          className="object-cover rounded-[4px]"
                        />
                      </div>
                      <span className="country-name">{country.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link 
              href="/ar" 
              className={`nav-item ${scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'}`}
              onMouseEnter={closeDropdown}
            >
              <span className="hidden md:block text-sm font-bold">العربية</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:w-full md:flex md:justify-end md:items-center">
            <Link 
              href="/offers" 
              className={`nav-item offers-link relative ${
                scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'
              }`} 
              onMouseEnter={closeDropdown}
            >
              <span className="text-sm font-bold">Offers</span>
              <span className="new-badge">
                New
              </span>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setIsNewCarDropdownOpen(true)}
              onMouseLeave={() => setIsNewCarDropdownOpen(false)}
            >
              <Link 
                href="/new-cars" 
                className={`nav-item  hover:border-b-2 hover:border-[#0d6efd] ${
                  scrolled ? 'text-[#2f2f2f]  hover:text-[#0d6efd]' : 'hover:text-white'
                }`}
                onClick={() => setIsNewCarDropdownOpen(false)}
              >
                <span className="text-sm font-bold">New</span>
              </Link>
              {isNewCarDropdownOpen && <NewCarDropdown />}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setIsUsedCarDropdownOpen(true)}
              onMouseLeave={() => setIsUsedCarDropdownOpen(false)}
            >
              <Link 
                href="/used-cars" 
                className={`nav-item hover:border-b-2 hover:border-[#0d6efd] ${
                  scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'
                }`}
                onMouseEnter={closeDropdown}
              >
                <span className="text-sm font-bold">Used</span>
              </Link>
              {isUsedCarDropdownOpen && <NewCarDropdown />}
            </div>
            <Link 
              href="/electric-cars" 
              className={`nav-item hover:border-b-2 hover:border-[#0d6efd] ${
                scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'
              }`}
              onMouseEnter={closeDropdown}
            >
              <span className="text-sm font-bold">Electric</span>
            </Link>
            <Link 
              href="/chinese-cars" 
              className={`nav-item relative hover:border-b-2 hover:border-[#0d6efd] ${
                scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'
              }`}
              onMouseEnter={closeDropdown}
            >
              <span className="text-sm font-bold">Chinese</span>
              <span className="new-badge">
                New
              </span>
            </Link>
            <Link 
              href="/blog" 
              className={`nav-item hover:border-b-2 hover:border-[#0d6efd] ${
                scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'
              }`}
              onMouseEnter={closeDropdown}
            >
              <span className="text-sm font-bold">Blog</span>
            </Link>
            <Link 
              href="/services" 
              className={`nav-item hover:border-b-2 hover:border-[#0d6efd] ${
                scrolled ? 'text-[#2f2f2f] hover:text-[#0d6efd]' : 'hover:text-white'
              }`}
              onMouseEnter={closeDropdown}
            >
              <span className="text-sm font-bold">Services</span>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center justify-end">
             <Link href="/sell-my-car" className="px-4 py-1.5 bg-[#00c269] hover:bg-[#00b05e] rounded-[6px] text-white text-sm font-medium transition-colors whitespace-nowrap mr-4">
                Sell My Car
             </Link>
            <div className="flex flex-row-reverse items-center">
              {/* User Icon Button to open drawer */}
              <button 
                className="flex items-center justify-center p-2 rounded-full cursor-pointer"
                onClick={() => setIsUserDrawerOpen(true)}
                aria-label="User menu"
              >
                <svg 
                  id="burgermenu" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24"
                  className={scrolled ? 'fill-[#0f1420]' : 'fill-white'}
                >
                  <path id="Path_5537" data-name="Path 5537" d="M0,0H24V24H0Z" fill="none"/>
                  <path id="Path_5538" data-name="Path 5538" d="M4.056,18.667H20.944a1.056,1.056,0,0,0,0-2.111H4.056a1.056,1.056,0,0,0,0,2.111Zm0-5.278H15.9a1.056,1.056,0,1,0,0-2.111H4.056a1.056,1.056,0,0,0,0,2.111ZM3,7.056A1.059,1.059,0,0,0,4.056,8.111H20.944a1.056,1.056,0,1,0,0-2.111H4.056A1.059,1.059,0,0,0,3,7.056Z" transform="translate(-1 -1)"/>
                </svg>
              </button>
              
              {/* Hidden User Dropdown for Desktop */}
              <div 
                className="hidden md:flex relative ml-2"
                onMouseEnter={() => setIsUserDropdownOpen(true)}
                onMouseLeave={() => setIsUserDropdownOpen(false)}
              >
                <button 
                  className={`flex items-center gap-2 nav-item hover:border-b-2 hover:border-[#0d6efd] px-3 py-1.5 ${
                    scrolled ? 'hover:text-[#0d6efd]' : 'hover:text-white'
                  }`}
                  aria-label="User profile"
                >
                  <div className="flex items-center gap-2">
                    <Image 
                      width={24} 
                      height={24}  
                      src={'/profile-330ae7176f26db1f6145a64f1b9da6490e620d1168d57650362b31da14c36e46 (1).png'} 
                      className="w-6 h-6 rounded-full" 
                      alt="user" 
                    />
                    <MdKeyboardArrowDown 
                      className={`w-5 h-5 transition-transform duration-200 ${isUserDropdownOpen ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </button>
                
                {/* User Dropdown */}
                {isUserDropdownOpen && (
                  <div className="absolute top-full right-0 mt-1 w-auto bg-white rounded-[8px] shadow-lg overflow-hidden z-10 text-black">
                    <div className="p-5 flex justify-between items-center gap-3">
                      <Link href="/login" className="text-[#0d6efd] text-[14px] font-medium hover:text-[#0a58ca] transition-colors">
                        Login
                      </Link>
                      <span className="text-gray-400">|</span>
                      <Link href="/register" className="text-[#0d6efd] text-[14px] font-medium hover:text-[#0a58ca] transition-colors">
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MUI Drawer */}
      <UserDrawer 
        open={isUserDrawerOpen} 
        onClose={() => setIsUserDrawerOpen(false)} 
      />
    </nav>
  );
};

export default Navbar; 
