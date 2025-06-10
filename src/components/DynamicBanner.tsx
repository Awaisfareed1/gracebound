import React from 'react';
import Link from 'next/link';

interface BannerProps {
  backgroundImage: string;
  overlayColor?: string;
  overlayOpacity?: string;
  heading: string;
  subHeading?: string;
  buttonText?: string;
  buttonLink?: string;
}

const DynamicBanner: React.FC<BannerProps> = ({
  backgroundImage,
  overlayColor = 'bg-black',
  overlayOpacity = 'bg-opacity-50',
  heading,
  subHeading,
  buttonText,
  buttonLink = '#',
}) => {
  return (
    <div 
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-cover bg-center
      font-inter"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={`absolute inset-0 ${overlayColor} ${overlayOpacity}`}></div>
      
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-[24px] md:text-[36px] lg:text-[44px] xl:text-[53px] font-bold text-white mb-4 animate-fadeIn font-inter">
          {heading}
        </h1>
        
        {subHeading && (
          <p className="text-[18px] md:text-[24px] text-white mb-8 animate-fadeIn delay-100">
            {subHeading}
          </p>
        )}
        
        {buttonText && (
          <Link 
            href={buttonLink}
            className="button-secondary"
          >
            {buttonText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default DynamicBanner;