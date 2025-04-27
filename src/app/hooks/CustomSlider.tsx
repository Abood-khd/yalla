import React, { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect, useState } from 'react';
import { Settings } from 'react-slick';

interface CustomSliderProps {
  children: ReactNode;
  settings: Settings;
  className?: string;
}

const CustomSlider = ({ children, settings, className = '' }: CustomSliderProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const customSettings: Settings = {
    ...settings,
    customPaging: function(i: number) {
      return (
        <button 
          aria-label={`Slide ${i+1}`}
          suppressHydrationWarning={true}
        >
          {i + 1}
        </button>
      );
    },
    appendDots: (dots: React.ReactNode) => (
      <div suppressHydrationWarning={true}>
        <ul suppressHydrationWarning={true}>{dots}</ul>
      </div>
    )
  };

  if (!isClient) {
    return <div className={className}>{Array.isArray(children) ? children[0] : children}</div>;
  }

  return <Slider {...customSettings} className={className}>{children}</Slider>;
};

export default CustomSlider; 