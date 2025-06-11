import React from 'react'
import HeroBanner from '@/components/HeroBanner'
import AdmissionContent from '@/components/AdmissionContent'
import Head from 'next/head'
const admissions = () => {
    return (
        <>
            <Head>
                <title>Admissions Process | Grace Abound Recovery</title>
                <meta
                    name="description"
                    content="Learn about our admissions process and how to start your journey to recovery at Grace Abound Recovery. We're here to guide you every step of the way."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Admissions Process | Grace Abound Recovery" />
                <meta
                    property="og:description"
                    content="Learn about our admissions process and how to start your journey to recovery at Grace Abound Recovery. We're here to guide you every step of the way."
                />
                <meta property="og:image" content="/images/admission-banner.jpg" />
                <meta property="og:url" content="https://recoverycenter.com/admissions" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Admissions Process | Grace Abound Recovery" />
                <meta
                    name="twitter:description"
                    content="Learn about our admissions process and how to start your journey to recovery at Grace Abound Recovery. We're here to guide you every step of the way."
                />
                <meta name="twitter:image" content="/images/admission-banner.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <HeroBanner
                title="Admissions Process"
                subtitle="Start your journey to recovery today"
                backgroundImage="/images/admission-banner.jpg"
            />
            <AdmissionContent />
        </>
    )
}

export default admissions