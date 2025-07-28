import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

import product from '../../public/images/prod.png'
import TestimonialCard from '@/components/cards/Testimonials'
import FeatureCard from '@/components/cards/Features'

export default function Home() {
  return (
    <main className="flex max-w-7xl flex-col px-8 sm:px-16 justify-self-center ">

      {/* Hero Section */}
      <section className="sm:flex min-h-[calc(100vh-64px-160px)] sm:space-x-16">
        <div className="flex flex-col flex-1 justify-center text-balance">
          {/* <h1 className="scroll-m-20 text-4xl font-bold lg:text-8xl">ObstaX</h1>
          <h1 className="scroll-m-20 text-3xl font-light lg:text-4xl mt-2">Pendant and Wristbands</h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">ObstaX transforms the way visually impaired individuals experience the world with AI-powered pendant and a wristband, providing real-time navigation and obstacle detection for greater freedom.</p> */}

          <h1 className="scroll-m-20 text-xl font-medium lg:text-2xl mt-2">ObstaX's Pendant and Wristbands</h1>
          <h1 className="scroll-m-20 text-4xl font-bold mt-2 lg:mt-4 lg:text-6xl">Safety.</h1>
          <h1 className="scroll-m-20 text-4xl font-bold mt-1 lg:mt-2 lg:text-6xl">Independence.</h1>
          <h2 className="scroll-m-20 text-4xl font-normal italic mt-2 lg:mt-4 lg:text-6xl">Made for You.</h2>


          <Button asChild className="hover:bg-secondary hover:text-foreground [&:not(:first-child)]:mt-12 py-4 lg:py-6 lg:text-lg">
            <Link href="/product/pre-order">
              Pre-Order Now
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col flex-1 justify-center mt-12 sm:mt-0">
          <Image
            priority={true}
            src={product}
            width={1000}
            height={1000}
            alt="ObstaX SmartGlasses"
          />
        </div>
      </section>

      {/* Testimonial Cards */}
      <section className="flex flex-col">

        <h2 className="scroll-m-20 text-3xl font-bold mt-12 lg:text-4xl">Testimonials</h2>
        <TestimonialCard />

        <h2 className="scroll-m-20 text-3xl font-bold mt-12 lg:text-4xl">Product features</h2>
        <FeatureCard />

      </section>
    </main>
  )
}