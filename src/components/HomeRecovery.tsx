import React from 'react';
import Image from 'next/image';

const HomeRecovery = () => {
    return (
        <div className="responsive-container md:py-16">

            <div className="bg-secondary-50 rounded-xl py-8 md:py-12 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-80 lg:h-full w-full">
                        <div className="absolute inset-0  overflow-hidden">
                            <Image
                                src="/images/homerecovery7.jpg"
                                alt="Recovery Process"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h2 className="text-center">Our Adolescent Recovery Program</h2>
                        </div>
                        <p className="text-secondary text-center">
                            Our programs for adolescents address substance abuse through therapy and psychoeducation, providing support and tools for recovery and relapse prevention
                        </p>
                        <div className='flex justify-center items-center'>
                            <button className='button-primary'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeRecovery;