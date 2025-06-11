import React from 'react'
import DynamicBanner from '@/components/DynamicBanner'
import ContactForm from '@/components/ContactForm'
import ContactText from '@/components/ContactText'
import ContactAlert from '@/components/ContactAlert'
import Head from 'next/head'
const ContactUs = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Grace Abound Recovery</title>
        <meta
          name="description"
          content="Reach out to Grace Abound Recovery for compassionate support and information about our services. We're here to help you on your recovery journey."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Contact Us | Grace Abound Recovery" />
        <meta
          property="og:description"
          content="Reach out to Grace Abound Recovery for compassionate support and information about our services. We're here to help you on your recovery journey."
        />
        <meta property="og:image" content="/images/contactbanner.jpg" />
        <meta property="og:url" content="https://recoverycenter.com/contact-us" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Grace Abound Recovery" />
        <meta
          name="twitter:description"
          content="Reach out to Grace Abound Recovery for compassionate support and information about our services. We're here to help you on your recovery journey."
        />
        <meta name="twitter:image" content="/images/contactbanner.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DynamicBanner
        backgroundImage="/images/contactbanner.jpg"
        heading="Get In Touch"
        subHeading="Contact Grace Abounds Recovery"
        // buttonText="Learn More"
        // buttonLink="/about"
        overlayColor="bg-black"
        overlayOpacity="bg-opacity-60"
      />
      <ContactText />
      <ContactForm />
      <ContactAlert />
    </>
  )
}

export default ContactUs