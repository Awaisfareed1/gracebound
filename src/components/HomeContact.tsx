import React from 'react';
import Link from 'next/link';

const HomeContact = () => {
  return (
    <section className="relative">
      <div
        className="min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-fixed flex justify-center items-center"
        style={{
          backgroundImage: "url('/images/homeContact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="responsive-container relative z-10 h-full  ">
          <div className="text-center w-full">
            <span className="text-[24px] italic font-medium font-playfair text-white">
              Call Us Now
            </span>

            <h2 className="text-white">
              Join Our Drug Rehab in Monmouth County Today
            </h2>

            <p className="text-[20px] text-white pt-8 pb-5">
              Our recovery program is designed as a 6-week recurring cycle, allowing for continuous support and the opportunity to build upon progress. Call our team to learn more about how we can help.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Link
                href="tel:732-696-8162"
                className="button-secondary"
              >
                732-696-8162
              </Link>
              <Link
                href="tel:+855-346-3472"
                className="button-secondary"
              >

                (855) FINDGRACE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContact;