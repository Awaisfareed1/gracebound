import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

const HomeLogoSwiper = () => {
  // Replace these with your actual logo imports
  const clientLogos = [
    '/logos/aetna.png',
    '/logos/blue-cross.png',
    '/logos/cigna-logo.png',
    '/logos/humana.png',
    '/logos/united-healthcare-logo.png',
    '/logos/aetna.png',
    '/logos/blue-cross.png',
    '/logos/cigna-logo.png',
    '/logos/humana.png',
    '/logos/united-healthcare-logo.png',
  ];

  return (
    <div className="">
      {/* Text Section with Container */}
      <div className="responsive-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="">
              Insurance Providers
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-secondary">
              We accept many insurances. Please call us at 732-696-8162 so that we can discuss how your benefits may apply and assist you with completing an insurance verification.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width Logo Swiper */}
      <div className="w-full bg-primary py-8">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {clientLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="relative h-20 w-40 grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100px, 160px"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeLogoSwiper;