import React from 'react';
import { FaCheck } from 'react-icons/fa';

const TreatmentComponent = () => {
  return (
    <div className="responsive-container py-12">
      <div className="space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='flex justify-center items-center'>
            <h2 className="">Our Treatment Programs</h2>
          </div>
          <div className='flex flex-col gap-6'>
            <p className="text-secondary">
              At Grace Abounds Recovery, we believe in the power of healing and transformation. Located in Matawan, NJ, our center is dedicated to providing compassionate and comprehensive care for individuals seeking to overcome addiction and reclaim their lives.
            </p>
            <p className="text-secondary">
              Our programs can help with recovery from drug and alcohol addiction, and can work with clients struggling with underlying dual diagnosis mental health concerns.
            </p>
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative rounded-lg overflow-hidden min-h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/images/treatement1.jpg')" }}
            >
              <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
            </div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className=" text-white mb-6">Residential Treatment</h3>
                <ul className="space-y-4">
                  {[
                    "24/7 medical supervision",
                    "Individual therapy sessions",
                    "Group counseling",
                    "Holistic treatment approaches",
                    "Family therapy options"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-white">
                      <FaCheck className="text-secondary-300 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-lg transition duration-300 self-start">
                Learn More
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-lg overflow-hidden min-h-[400px]">
            <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: "url('/images/treatment2.jpg')" }}
            >
              <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
            </div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className=" text-white mb-6">Outpatient Program</h3>
                <ul className="space-y-4">
                  {[
                    "Flexible scheduling",
                    "Intensive outpatient options",
                    "Continuing care support",
                    "Relapse prevention",
                    "Aftercare planning"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-white">
                      <FaCheck className="text-secondary-300 mt-1 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-lg transition duration-300 self-start">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentComponent;