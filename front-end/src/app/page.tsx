import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowDownIcon, ArrowRightIcon } from 'lucide-react'

import CountdownTimeline from '@/components/CountdownTimeline'
import FeatureList from '@/components/FeatureList'
import UseCasesList from '@/components/UseCasesList'

export const metadata: Metadata = {
  title: 'ObstaX | Assistive Wearables for the Visually Impaired',
  description:
    'ObstaX builds AI-powered wearable technology that helps blind and visually impaired users navigate with confidence.',
  openGraph: {
    title: 'ObstaX | Assistive Wearables for the Visually Impaired',
    description:
      'ObstaX builds AI-powered wearable technology that helps blind and visually impaired users navigate with confidence.',
    url: '/',
    siteName: 'ObstaX',
    images: [
      {
        url: '/images/og/obstax-home.png',
        width: 1200,
        height: 630,
        alt: 'ObstaX wearable assistive technology',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ObstaX | Assistive Wearables for the Visually Impaired',
    description:
      'ObstaX builds AI-powered wearable technology that helps blind and visually impaired users navigate with confidence.',
    images: ['/images/og/obstax-home.png'],
  },
}

export default function Home() {
  return (
    <main className="page">

      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-64px-160px)] flex-col gap-2 sm:flex-row sm:gap-16">
        <div className="order-2 flex flex-1 flex-col justify-center text-balance sm:order-1">

          <h1 className="scroll-m-20 text-xl font-medium lg:text-2xl lg:mt-12">ObstaX Mini: AI Pendant</h1>
          <h1 className="scroll-m-20 text-4xl font-bold mt-2 lg:mt-4 lg:text-6xl">Confidence,</h1>
          <h1 className="scroll-m-20 text-4xl font-bold mt-1 lg:mt-2 lg:text-6xl">Independence,</h1>
          <h2 className="scroll-m-20 text-4xl font-normal italic mt-2 lg:mt-4 lg:text-6xl">Made for You.</h2>

          {/* <Button asChild className="hover:bg-secondary hover:text-foreground hover:border [&:not(:first-child)]:mt-12 py-4 lg:py-6 lg:text-lg rounded-3xl">
            <Link href="/product/pre-order">
              Pre-Order Now
              <ArrowRightIcon />
            </Link>
          </Button>
        </div> */}

          <Button asChild className="hover:bg-secondary hover:text-foreground hover:border [&:not(:first-child)]:mt-12 py-4 lg:py-6 lg:text-lg rounded-3xl">
            <Link href="/#timeline">
              View Our Timeline
              <ArrowDownIcon />
            </Link>
          </Button>
        </div>

        <div className="order-1 flex flex-1 flex-col justify-center sm:order-2">
          <Image
            priority={true}
            // src="/images/obstax_mini_prodct_image_2.JPG"
            src="/images/obstax-main-pic-graybg.png"
            // src="/images/obstax-main-pic.png"
            width={600}
            height={400}
            min-width={400}
            min-height={400}
            alt="ObstaX SmartGlasses"
          />
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="section-header !mt-0" id="timeline">Our timeline</h2>
        <CountdownTimeline />

        {/* <h2 className="section-header" id="testimonial">Testimonials</h2>
        <TestimonialCard /> */}

        <h2 className="section-header" id="features">Product key features</h2>
        <FeatureList />

        {/* <h2 className="section-header" id="use-cases">Real Use Cases</h2>
        <UseCasesList /> */}
      </section>

    </main>
  )
}
