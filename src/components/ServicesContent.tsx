import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FaPlay, FaPause, FaInfoCircle } from 'react-icons/fa';
import { ReactPlayerProps } from 'react-player';
import Link from 'next/link';

// Dynamically import ReactPlayer with no SSR to prevent hydration issues
const ReactPlayer = dynamic(() => import('react-player/lazy'), { 
  ssr: false,
  loading: () => <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
    <div className="animate-pulse">Loading video...</div>
  </div>
});

const servicesData = [
  {
    title: "Co-occurring (Dual Diagnosis) Treatment",
    description: "Clients participating in co-occurring treatment will work with therapists to address co-occurring mental health and addictions concerns, often called dual diagnosis. Through both individual and group therapy components, clients will learn about the relationship between substance use disorders and mental health diagnoses such as depression, anxiety, bipolar, and PTSD. With the help of trained professionals, clients will develop the skills needed to manage and reduce the impact of mental illness and addictions symptoms, breaking the cycles created by these disorders.",
    videoUrl: "/videos/Dual Diagnios.mp4",
    hasVideo: true
  },
  {
    title: "Partial Care (PC) Program",
    description: "The partial hospitalization or partial care program at Grace Abounds Recovery is our most immersive treatment program. Clients in our partial care program participate in treatment five days per week for about five hours each day. The intensity of this program makes it a suitable alternative to inpatient rehab for clients who do not need around-the-clock supervision. Every week, participants focus on a new theme that uniquely supports addiction recovery.",
    hasVideo: false
  },
  {
    title: "Intensive Outpatient Program (IOP)",
    description: "The intensive outpatient program at Grace Abounds Recovery meets 3-5 days per week. On treatment days, you'll be at our center for about three hours each. The intensive outpatient program is a 'step down' from partial care programs for clients before they transition to an outpatient group. While in IOP, clients will participate in morning or evening groups and will also work with their therapist in individual sessions.",
    videoUrl: "/videos/IOP.mp4",
    hasVideo: true
  },
  {
    title: "Outpatient Program (OP)",
    description: "Clients in outpatient treatment at Grace Abounds Recovery attend sessions 1-2 days per week, providing optimal flexibility for those at an appropriate stage in their journey. Our outpatient program for substance abuse treatment helps clients develop the skills needed to address substance use disorders at a lower level of care while also providing clients opportunities to learn relapse prevention techniques.",
    videoUrl: "/videos/OP.mp4",
    hasVideo: true
  },
  {
    title: "Adolescent Treatment Program",
    description: "What if you're looking for a treatment program for a teenager? Our adolescent recovery program services clients aged 12+. Caregivers are highly involved in their child's treatment at Grace Abounds Recovery and must participate in our family program, which involves attending weekly individual or group therapy sessions with your child. We offer both intensive outpatient (IOP) and outpatient (OP) services for adolescents in need of treatment.",
    hasVideo: false
  }
];

const ServicesContent = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  // Use the correct type for the player ref
  const playersRef = useRef<any[]>([]);

  const handleVideoPlay = (index: number) => {
    if (!servicesData[index].hasVideo) return;
    
    // Pause any currently playing video
    if (activeVideo !== null && activeVideo !== index) {
      const player = playersRef.current[activeVideo];
      // getInternalPlayer returns the underlying HTML5 video element
      if (player && typeof player.getInternalPlayer === 'function') {
        const internal = player.getInternalPlayer() as HTMLVideoElement | null;
        if (internal && typeof internal.pause === 'function') {
          internal.pause();
        }
      }
    }
    
    // Toggle the current video
    setActiveVideo(prev => (prev === index ? null : index));
  };

  return (
    <div className="responsive-container py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-secondary max-w-3xl mx-auto">
          Comprehensive treatment programs tailored to individual recovery needs
        </p>
      </div>

      <div className="space-y-20">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
          >
            {service.hasVideo ? (
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
                <ReactPlayer
                  ref={(el: any) => { 
                    if (el) playersRef.current[index] = el; 
                  }}
                  url={service.videoUrl}
                  width="100%"
                  height="100%"
                  playing={activeVideo === index}
                  controls
                  onPlay={() => handleVideoPlay(index)}
                  light={
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary to-secondary">
                      <div className="text-center p-8">
                        <div className="flex justify-center mb-4">
                          <div className="bg-white bg-opacity-20 p-4 rounded-full">
                            <FaPlay className="text-white text-2xl" />
                          </div>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-white text-opacity-80 flex items-center justify-center">
                          <FaInfoCircle className="mr-2" /> Click to watch program overview
                        </p>
                      </div>
                    </div>
                  }
                  onClick={() => handleVideoPlay(index)}
                />
              </div>
            ) : (
              <div className="bg-primary-50 rounded-xl p-8 flex items-center justify-center aspect-video">
                <div className="text-center">
                  <div className="bg-primary bg-opacity-20 p-6 rounded-full inline-block mb-4">
                    <FaInfoCircle className="text-primary text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Program Details</h3>
                  {/* <p className="text-secondary">Learn more about our {service.title}</p> */}
                </div>
              </div>
            )}

            <div className={`${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{service.title}</h2>
              <div className="prose text-secondary max-w-none">
                <p className="text-lg">{service.description}</p>
              </div>
              {/* {service.hasVideo && (
                <button 
                  onClick={() => handleVideoPlay(index)}
                  className="mt-6 px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg flex items-center transition"
                >
                  {activeVideo === index ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
                  {activeVideo === index ? 'Pause Video' : 'Play Video'}
                </button>
              )} */}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-primary-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-primary mb-4">Ready to Begin Your Journey?</h3>
        <p className="text-secondary mb-6 max-w-2xl mx-auto">
          Our compassionate team is ready to help you find the right treatment program for your needs.
        </p>
        <Link href='/admissions' className="px-8 py-3 bg-primary hover:bg-primary-600 text-white rounded-lg font-medium transition">
          Contact Our Admissions Team
        </Link>
      </div>
    </div>
  );
};

export default ServicesContent;