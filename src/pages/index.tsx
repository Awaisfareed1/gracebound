import React from 'react'
import DynamicBanner from '@/components/DynamicBanner'
import TreatmentComponent from '@/components/TreatmentComponent';
import HomeAbout from '@/components/HomeAbout';
import HomeRecovery from '@/components/HomeRecovery';
import HomeLogoSwiper from '@/components/HomeLogoSwiper';
import HomeContact from '@/components/HomeContact';
import Head from 'next/head';
const index = () => {
  return (
    <>

      <Head>
        <title>Grace Abound Recovery | Trusted Monmouth County Drug Rehab</title>
        <meta
          name="description"
          content="Compassionate, effective substance abuse care for adults in New Jersey. Our Monmouth County drug rehab offers personalized treatment plans to support your recovery journey."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Grace Abound Recovery | Trusted Monmouth County Drug Rehab" />
        <meta
          property="og:description"
          content="Compassionate, effective substance abuse care for adults in New Jersey. Our Monmouth County drug rehab offers personalized treatment plans to support your recovery journey."
        />
        <meta property="og:image" content="/images/bannerimageHome.webp" />
        <meta property="og:url" content="https://recoverycenter.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grace Abound Recovery | Trusted Monmouth County Drug Rehab" />
        <meta
          name="twitter:description"
          content="Compassionate, effective substance abuse care for adults in New Jersey. Our Monmouth County drug rehab offers personalized treatment plans to support your recovery journey."
        />
        <meta name="twitter:image" content="/images/bannerimageHome.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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