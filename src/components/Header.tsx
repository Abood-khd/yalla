'use client'

import SearchBar from "./SearchBar";

const Header = () => {

  return (
    <>
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
          <img 
          src="/webp_spotlight_web_VW_Programmatic_Banners_UF_1920x500_YallaMotors.webp" 
          alt="Dubai skyline with car" 
          className="w-full h-full object-right md:object-center opacity-100"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}></div>
      </div>
      
        
      {/* Content */}
      <div className="relative bottom-10 z-20 container mx-auto h-[50vh] flex flex-col justify-center px-8  md:px-20  lg:mt-12  ">
        <div className="max-w-5xl ">
          {/* Main Headline */}
          <h1 className= "text-MD lg:text-3xl md:text-4xl lg:text-3xl font-bold text-white ">
            New Cars, Used Cars, Car Prices & Reviews in UAE
          </h1>
          
          {/* AI Search Feature */}
          <div className="flex flex-col mt-4 md:mt-7">
          <div className="flex items-center text-white mb-2">
            <svg className="w-5 h-5 md:w-6 md:h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
            </svg>
            <span className="font- text-[12px] md:text-[14px] underline">Find The Right Car For You Using AI</span>
          </div>
          
          <div className="mb-2 ml-4 md:ml-8">
            <button className="text-white text-[12px] md:text-[14px] hover:underline">
              Start Your Search Now »
            </button>
          </div>
            </div>
        </div>

       
      </div>
    </div>

    <div className=" mx-auto   ">

    <SearchBar placeholder="My budget is around 70k a and more" /> 
    </div>

    </>
  );
};

export default Header;
