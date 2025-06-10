import React from 'react';
import Link from 'next/link';

const HContactText = () => {
  return (
    <section className="relative py-5 lg:py-20">

        <div className="responsive-container relative z-10 h-full  ">
          <div className="text-center w-full">
            <span className="text-[24px] italic font-medium font-playfair text-primary">
              Recovery can start today
            </span>

            <h2 className="text-primary">
              Contact Grace Abounds Recovery for Substance Abuse Treatment
            </h2>

             <h2 className="text-secondary mt-4">
              We Want to Hear Your Story
            </h2>

            <p className="text-[18px] text-secondary pt-8 pb-5">
              We understand the importance of a holistic, client-focused program for individuals on the path to healing from a substance use disorder. Our compassionate and knowledgeable therapists understand the impacts of addiction and are passionate about helping clients in their recovery.
            </p>
          </div>
        </div>
    </section>
  );
};

export default HContactText;