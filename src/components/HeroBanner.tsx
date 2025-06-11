import React from 'react';
import Image from 'next/image';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] w-full">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          quality={100}
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="responsive-container relative z-10 h-full flex flex-col justify-center text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 animate-fadeIn text-white">{title}</h2>
          {subtitle && (
            <p className="text-[18px] md:text-[24px] text-white mb-8 animate-fadeIn delay-100">{subtitle}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;