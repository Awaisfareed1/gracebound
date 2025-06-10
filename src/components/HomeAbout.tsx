import React from 'react';
import Image from 'next/image';

const HomeAbout = () => {
    return (
        <div className="responsive-container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-80 md:h-full rounded-lg overflow-hidden">
                    <Image
                        src="/images/HomeAbout.jpg"
                        alt="About Grace Abounds Recovery"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                <div className="space-y-6">
                    <h3 className='font-playfair text-[24px] italic'>About Us</h3>
                    <h2 className="text-[30px] md:text-[42px] font-bold text-primary ">
                        We Are Grace Abounds
                    </h2>

                    <div className="space-y-4 text-secondary">
                        <p>
                            At our drug rehab in Matawan, we care about our clients’ well-being. That’s the mission behind our outpatient treatment program.
                        </p>

                        <p>
                            We understand that recovery is a deeply personal journey, which is why we offer a trauma-focused, co-ed outpatient program tailored to meet the unique needs of each individual. Our approach integrates evidence-based therapies with holistic healing practices, ensuring a well-rounded path to recovery.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-4">
                        <button className="button-primary">Learn More</button>
                        <button className="button-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;