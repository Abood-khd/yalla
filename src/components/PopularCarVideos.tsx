'use client';

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import YouTubeIcon from '@mui/icons-material/YouTube';

interface CarVideo {
  id: string;
  videoId: string;
  title: string;
}

const carVideos: CarVideo[] = [
  {
    id: '1',
    videoId: 'DlUotgqnbRk',
    title: 'The Perfect Budget Chinese Sedan? | Geely Preface'
  },
  {
    id: '2',
    videoId: 'DlUotgqnbRk',
    title: 'KIA EV6 | Sleek, Smart, and Fully Electric?'
  },
  {
    id: '3',
    videoId: 'DlUotgqnbRk',
    title: 'MG Whale | A Funky Compact SUV'
  },
  {
    id: '4',
    videoId: 'DlUotgqnbRk',
    title: 'Why a 4x4 Is Important for Families? | Mitsubis...'
  },
  {
    id: '5',
    videoId: 'DlUotgqnbRk',
    title: 'Honda CR-V 2025 It Still Shines Through'
  },
  {
    id: '6',
    videoId: 'DlUotgqnbRk',
    title: 'EXEED RX | Smooth As Silk'
  },
  {
    id: '7',
    videoId: 'DlUotgqnbRk',
    title: 'Honda CR-V 2025 It Still Shines Through'
  }
];

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="slick-arrow slick-next custom-arrow"
      onClick={onClick}
      style={{
        position: 'absolute',
        right: '-30px',
        top: '30%',
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
      style={{
        position: 'absolute',
        left: '-30px',
        top: '30%',
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

export default function PopularCarVideos() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  const handleVideoClick = (videoId: string) => {
    setActiveVideo(videoId);
  };

  return (
    <div className="container mx-auto px-3 mt-5 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-20 py-4 lg:py-8">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0 mb-6 lg:mb-8">
        <div className="space-y-3 w-full lg:w-auto">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-tight">
            Popular Car Videos in UAE
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
            Keep yourself updated with reviews from experts.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs sm:text-sm text-gray-800">Subscribe Now:</span>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 bg-red-600 text-white px-2 py-1 text-xs sm:text-sm hover:bg-red-700 transition-colors">
                <YouTubeIcon sx={{ fontSize: { xs: 16, sm: 20 } }} /> YouTube
              </button>
              <span className="text-xs sm:text-sm text-gray-500 border border-gray-200 px-2 py-1">70K</span>
            </div>
          </div>
        </div>
        <button className="w-full sm:w-auto px-4 py-1.5 text-xs sm:text-sm text-[#124d99] hover:bg-[#124d99] hover:text-white border border-[#124d99] rounded transition-colors">
          View All
        </button>
      </div>

      <div className="relative px-0 sm:px-4 md:px-6 lg:px-8">
        <Slider {...settings} className="video-slider">
          {carVideos.map((video) => (
            <div key={video.id} className="px-1.5 sm:px-2">
              <div className="bg-white overflow-hidden">
                <div className="relative aspect-video cursor-pointer group" onClick={() => handleVideoClick(video.videoId)}>
                  {activeVideo === video.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] border-t-transparent border-l-[12px] sm:border-l-[16px] border-l-white border-b-[6px] sm:border-b-[8px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <h3 className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-800 mt-2 mb-3 line-clamp-2 px-1">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .video-slider {
          margin: 0 -6px;
        }
        
        .video-slider .slick-track {
          margin-left: 0;
          display: flex;
          gap: 8px;
        }

        .video-slider .slick-slide {
          height: inherit;
        }

        .video-slider .slick-slide > div {
          height: 100%;
        }

        .video-slider .slick-dots {
          bottom: -30px;
        }

        .video-slider .slick-dots li {
          margin: 0 2px;
        }

        .video-slider .slick-dots li button:before {
          color: #e5e7eb;
          opacity: 1;
          font-size: 8px;
        }

        .video-slider .slick-dots li.slick-active button:before {
          color: #124d99;
        }

        .custom-arrow {
          width: 36px !important;
          height: 36px !important;
          z-index: 10;
          display: flex !important;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 640px) {
          .custom-arrow {
            width: 40px !important;
            height: 40px !important;
          }

          .video-slider .slick-dots li button:before {
            font-size: 10px;
          }

          .video-slider {
            margin: 0 -8px;
          }

          .video-slider .slick-track {
            gap: 12px;
          }
        }

        @media (min-width: 1024px) {
          .custom-arrow {
            width: 44px !important;
            height: 44px !important;
          }

          .video-slider .slick-dots li button:before {
            font-size: 12px;
          }

          .video-slider {
            margin: 0 -12px;
          }

          .video-slider .slick-track {
            gap: 16px;
          }
        }

        .custom-arrow:before {
          display: none;
        }

        .slick-prev {
          left: -12px;
          @media (min-width: 640px) {
            left: -16px;
          }
          @media (min-width: 1024px) {
            left: -20px;
          }
        }

        .slick-next {
          right: -12px;
          @media (min-width: 640px) {
            right: -16px;
          }
          @media (min-width: 1024px) {
            right: -20px;
          }
        }
      `}</style>
    </div>
  );
} 