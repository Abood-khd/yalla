'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const DynamicTabs = dynamic(() => 
  import('@mui/material').then(mod => mod.Tabs), 
  { ssr: false }
);
const DynamicTab = dynamic(() => 
  import('@mui/material').then(mod => mod.Tab), 
  { ssr: false }
);

import type { TabProps, TabsProps } from '@mui/material';
import HydrationFix from '@/app/utils/HydrationFix';
import CustomSlider from '@/app/hooks/CustomSlider';

interface CarComparison {
  car1: {
    image: string;
    name: string;
    price: number;
  };
  car2: {
    image: string;
    name: string;
    price: number;
  };
  category: string;
}

const comparisons: CarComparison[] = [
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Audi Q7 2025',
      price: 295000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mercedes-Benz GLE-Class 2025',
      price: 495900,
    },
    category: 'SUV'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Audi Q7 2025',
      price: 295000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mercedes-Benz GLE-Class 2025',
      price: 495900,
    },
    category: 'SUV'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Audi Q7 2025',
      price: 295000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mercedes-Benz GLE-Class 2025',
      price: 495900,
    },
    category: 'SUV'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Audi Q7 2025',
      price: 295000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mercedes-Benz GLE-Class 2025',
      price: 495900,
    },
    category: 'SUV'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Audi Q7 2025',
      price: 295000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mercedes-Benz GLE-Class 2025',
      price: 495900,
    },
    category: 'SUV'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Land Rover Range Rover Sport 2025',
      price: 475610,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'BMW X5 2025',
      price: 450000,
    },
    category: 'SUV'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'BMW M4 2025',
      price: 420000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Audi RS5 2025',
      price: 380000,
    },
    category: 'COUPE'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Volkswagen Golf GTI 2025',
      price: 180000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Honda Civic Type R 2025',
      price: 190000,
    },
    category: 'HATCHBACK'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'BMW 5 Series 2025',
      price: 350000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mercedes-Benz E-Class 2025',
      price: 380000,
    },
    category: 'SEDAN'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mazda CX-30 2025',
      price: 120000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Hyundai Kona 2025',
      price: 110000,
    },
    category: 'CROSSOVER'
  },
  {
    car1: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Mazda CX-30 2025',
      price: 120000,
    },
    car2: {
      image: '/slide_show_Bentley_EXP_100_concept_2019.jpg',
      name: 'Hyundai Kona 2025',
      price: 110000,
    },
    category: 'CROSSOVER'
  },
];

const categories = ['SUV', 'COUPE', 'HATCHBACK', 'SEDAN', 'CROSSOVER'];

const useStyledDynamicTabs = () => {
  const [StyledComponent, setStyledComponent] = useState<React.ComponentType<TabsProps> | null>(null);

  useEffect(() => {
    const createStyledComponent = async () => {
      try {
        const { styled } = await import('@mui/material/styles');
        const styledTabs = styled(DynamicTabs)({
          borderBottom: '1px solid #e0e0e0',
          '& .MuiTabs-indicator': {
            backgroundColor: '#124d99',
            height: 2
          },
          '& .MuiTabs-flexContainer': {
            '@media (max-width: 640px)': {
              gap: '8px',
            }
          }
        });
        setStyledComponent(() => styledTabs);
      } catch (err) {
        console.error('Error loading styled component:', err);
      }
    };
    
    createStyledComponent();
  }, []);

  return StyledComponent;
};

const useStyledDynamicTab = () => {
  const [StyledComponent, setStyledComponent] = useState<React.ComponentType<TabProps> | null>(null);

  useEffect(() => {
    // Only create the styled component on the client
    const createStyledComponent = async () => {
      try {
        const { styled } = await import('@mui/material/styles');
        const styledTab = styled(DynamicTab)({
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '14px',
          padding: '12px 32px',
          color: '#9ca3af',
          '&.Mui-selected': {
            color: '#124d99',
          },
          '&:hover': {
            color: '#4b5563',
          },
          '@media (max-width: 640px)': {
            padding: '8px 16px',
            fontSize: '13px',
            minWidth: 'auto',
          }
        });
        setStyledComponent(() => styledTab);
      } catch (err) {
        console.error('Error loading styled component:', err);
      }
    };
    
    createStyledComponent();
  }, []);

  return StyledComponent;
};

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="slick-arrow slick-next custom-arrow"
      onClick={onClick}
      suppressHydrationWarning={true}
      style={{
        position: 'absolute',
        right: '-40px',
        top: '45%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.18)',
        cursor: 'pointer',
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <KeyboardArrowRightIcon sx={{ fontSize: 32, color: '#124d99' }} />
    </div>
  );
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="slick-arrow slick-prev custom-arrow"
      onClick={onClick}
      suppressHydrationWarning={true}
      style={{
        position: 'absolute',
        left: '-40px',
        top: '45%',
        transform: 'translateY(-50%)',
        width: '44px',
        height: '44px',
        backgroundColor: 'white',
        borderRadius: '50%',
        boxShadow: '0 3px 6px rgba(0, 0, 0, 0.18)',
        cursor: 'pointer',
        zIndex: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <KeyboardArrowLeftIcon sx={{ fontSize: 32, color: '#124d99' }} />
    </div>
  );
}

export default function CarComparisons() {
  const [tabValue, setTabValue] = useState(0);
  const StyledTabs = useStyledDynamicTabs();
  const StyledTab = useStyledDynamicTab();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const filteredComparisons = comparisons.filter(
    comparison => comparison.category === categories[tabValue]
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div suppressHydrationWarning={true}>
        <ul suppressHydrationWarning={true}>{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          dots: true,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
          adaptiveHeight: true,
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-18 py-12 lg:py-10  bg-[#fff] lg:bg-[#f5f5f5]" suppressHydrationWarning={true}>
      <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
        <h2 className="text-[17px] sm:text-2xl font-bold text-gray-900">
          Popular New Car Comparisons and prices in UAE
        </h2>
        <button className="px-1 py-0.5 lg:px-4 lg:py-1.5 text-sm border border-[#124d99] text-[#124d99] rounded hover:bg-[#124d99] hover:text-white transition-colors whitespace-nowrap" suppressHydrationWarning={true}>
          Compare
        </button>
      </div>

      <HydrationFix
        render={(isMounted) => 
          isMounted && StyledTabs && StyledTab ? (
            <StyledTabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              aria-label="car categories tabs"
            >
              {categories.map((category, index) => (
                <StyledTab style={{ fontWeight: 'bold' }} key={index} label={category} />
              ))}
            </StyledTabs>
          ) : null
        }
      />

      <div className="relative px-0 sm:px-8 lg:pb-10 ">
        <CustomSlider settings={settings} className="comparison-slider">
          {filteredComparisons.map((comparison, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[250px]">
                <div className="grid grid-cols-2 h-[200px]">
                  <div className="relative">
                    <div className="h-[120px] flex items-center justify-center p-2 sm:p-3">
                      <Image
                        src={comparison.car1.image}
                        alt={comparison.car1.name}
                        width={160}
                        height={160}
                        quality={75}
                        style={{ width: '100%', height: 'auto' }}
                      />
                    </div>
                    <div className="px-2 sm:px-3">
                      <h3 className="text-[14px] sm:text-[15px] font-bold text-gray-800 mb-1 whitespace-nowrap overflow-hidden text-ellipsis">
                        {comparison.car1.name}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] text-[#124d99] font-bold">
                        From AED {comparison.car1.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                      <div className="w-[1px] h-10 bg-gray-300"></div>
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#124d99] rounded-full flex items-center justify-center text-white text-xs sm:text-sm my-1.5">
                        VS
                      </div>
                      <div className="w-[1px] h-10 bg-gray-300"></div>
                    </div>
                    <div className="h-[120px] flex items-center justify-center p-2 sm:p-3">
                      <Image
                        src={comparison.car2.image}
                        alt={comparison.car2.name}
                        width={160}
                        height={160}
                        className="object-contain max-w-full"
                      />
                    </div>
                    <div className="px-2">
                      <h3 className="text-[15px] font-bold text-gray-800 mb-1 whitespace- overflow-hidden ">
                        {comparison.car2.name}
                      </h3>
                      <p className="text-[14px] text-[#124d99] font-bold">
                        From AED {comparison.car2.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-3 pb-3">
                  <button className="w-full py-1.5 text-sm text-[#124d99] font-bold border-1 border-[#124d99] rounded hover:bg-[#124d99] hover:text-white transition-colors" suppressHydrationWarning={true}>
                    Compare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>

      <style jsx global>{`
        .comparison-slider {
          margin: 0 -8px;
        }
        
        .comparison-slider .slick-track {
          margin-left: 0;
          display: flex;
        }

        .comparison-slider .slick-slide {
          height: inherit;
          > div {
            height: 100%;
          }
        }

        .comparison-slider .slick-dots {
          bottom: -30px;
        }

        .comparison-slider .slick-dots li {
          margin: 0 3px;
        }

        .comparison-slider .slick-dots li button:before {
          color: #e5e7eb;
          opacity: 1;
          font-size: 12px;
        }

        .comparison-slider .slick-dots li.slick-active button:before {
          color: #124d99;
        }

        .custom-arrow {
          width: 40px !important;
          height: 40px !important;
          z-index: 10;
        }

        .custom-arrow:before {
          display: none;
        }

        .slick-prev {
          left: -20px;
        }

        .slick-next {
          right: -20px;
        }

        @media (max-width: 768px) {
          .comparison-slider .slick-slide > div > div {
            height: 100%;
          }
        }
      `}</style>
    </div>
  );
}