import React from 'react'
import DynamicBanner from '@/components/DynamicBanner'
import ContactForm from '@/components/ContactForm'
import ContactText from '@/components/ContactText'
import ContactAlert from '@/components/ContactAlert'
const ContactUs = () => {
  return (
    <>
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