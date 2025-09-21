import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

import TestimonialCard from '@/components/cards/Testimonials'
import FeatureCard from '@/components/cards/Features'

export default function Home() {
  return (
    <main className="page">

      {/* Hero Section */}
      <section className="sm:flex min-h-[calc(100vh-64px-160px)] sm:space-x-16">
        <div className="flex flex-col flex-1 justify-center text-balance">

          <h1 className="scroll-m-20 text-xl font-medium lg:text-2xl mt-12">ObstaX 1.0: Pendant and Wristbands</h1>
          <h1 className="scroll-m-20 text-4xl font-bold mt-2 lg:mt-4 lg:text-6xl">Safety.</h1>
          <h1 className="scroll-m-20 text-4xl font-bold mt-1 lg:mt-2 lg:text-6xl">Independence.</h1>
          <h2 className="scroll-m-20 text-4xl font-normal italic mt-2 lg:mt-4 lg:text-6xl">Made for You.</h2>

          <Button asChild className="hover:bg-secondary hover:text-foreground hover:border [&:not(:first-child)]:mt-12 py-4 lg:py-6 lg:text-lg rounded-3xl">
            <Link href="/product/pre-order">
              Pre-Order Now
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col flex-1 justify-center mt-12 sm:mt-0">
          <Image
            priority={true}
            src="/images/prod.png"
            width={600}
            height={600}
            min-width={400}
            min-height={400}
            alt="ObstaX SmartGlasses"
          />
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="section-header">Testimonials</h2>
        <TestimonialCard />

        <h2 className="section-header">Product features</h2>
        <FeatureCard />
      </section>

    </main>
  )
}