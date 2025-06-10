import React from 'react'
import DynamicBanner from '@/components/DynamicBanner'
import TreatmentComponent from '@/components/TreatmentComponent';
import HomeAbout from '@/components/HomeAbout';
import HomeRecovery from '@/components/HomeRecovery';
import HomeLogoSwiper from '@/components/HomeLogoSwiper';
import HomeContact from '@/components/HomeContact';
const index = () => {
  return (
    <>
      <DynamicBanner
        backgroundImage="/images/bannerimageHome.webp"
        heading="Trusted Monmouth County Drug Rehab"
        subHeading="Compassionate, effective substance abuse care for adults in New Jersey."
        buttonText="Learn More"
        buttonLink="/about"
        overlayColor="bg-secondary"
        overlayOpacity="bg-opacity-60"
      />
      <TreatmentComponent />
      <HomeAbout />
      <HomeRecovery />
      <HomeLogoSwiper />
      <HomeContact />
    </>
  )
}

export default index;