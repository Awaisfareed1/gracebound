import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import Head from 'next/head'
import ServicesContent from '@/components/ServicesContent'
import ContactAlert from '@/components/ContactAlert'
const services = () => {
    return (
        <>
            <Head>
                <title>Our Treatment Services | Grace Abound Recovery</title>
                <meta
                    name="description"
                    content="Explore our comprehensive treatment services designed to support your journey to recovery. We offer personalized care plans, group therapy, and holistic approaches."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Our Treatment Services" />
                <meta
                    property="og:description"
                    content="Explore our comprehensive treatment services designed to support your journey to recovery. We offer personalized care plans, group therapy, and holistic approaches."
                />
                <meta property="og:image" content="/images/services-banner.jpg" />
                <meta property="og:url" content="https://recoverycenter.com/services" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Treatment Services" />
                <meta
                    name="twitter:description"
                    content="Explore our comprehensive treatment services designed to support your journey to recovery. We offer personalized care plans, group therapy, and holistic approaches."
                />
                <meta name="twitter:image" content="/images/services-banner.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <HeroBanner
                title="Our Treatment Services"
                subtitle="Comprehensive, evidence-based care for lasting recovery"
                backgroundImage="/images/services-banner.jpg"
            />
            <ServicesContent />
            <ContactAlert />
        </>
    )
}

export default services