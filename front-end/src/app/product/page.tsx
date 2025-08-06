import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'
import ImageGallery from './imageGallery'
import PreOrderForm from './form'
import ItemDescriptions from '@/components/cards/ItemDescription'
import FeatureCard from '@/components/cards/Features'
import Surveys from '@/components/cards/Surveys'

export default function Product() {
    return (
        <main className="page">

            <section className='flex flex-col sm:flex-row gap-10 sm:mt-16 mt-8'>
                <div id='itemDescription' className='sm:hidden'>
                    <h1 className="scroll-m-20 text-2xl font-semibold lg:text-2xl">ObstaX 1</h1>
                    <h4 className="scroll-m-20 text-lg font-light mt-0">Pendant and Wristbands</h4>
                    <h4 className="scroll-m-20 text-xl font-normal mt-4">S$ 209</h4>
                </div>

                <ImageGallery />

                <div id='descriptionColumn' className='flex flex-col sm:w-120'>
                    <div id='itemDescription' className='hidden sm:inline'>
                        <h1 className="scroll-m-20 text-2xl font-semibold lg:text-2xl">ObstaX 1</h1>
                        <h4 className="scroll-m-20 text-lg font-light mt-0">Pendant and Wristbands</h4>
                        <h2 className="scroll-m-20 text-xl font-normal mt-4">S$ 209</h2>
                    </div>

                    <h4 className="scroll-m-20 text-lg font-normal sm:mt-12">
                        ObstaX transforms the way visually impaired individuals experience the world with AI-powered smart glasses and a wristband, providing real-time navigation and obstacle detection for greater freedom.
                    </h4><h4 className="scroll-m-20 text-lg font-normal mt-4">
                        Colour Shown: Atmosphere/Bright Crimson/Crimson Bliss/Black
                    </h4><h4 className="scroll-m-20 text-lg font-normal mt-4">
                        Colour Shown: Atmosphere/Bright Crimson/Crimson Bliss/Black
                    </h4><h4 className="scroll-m-20 text-lg font-normal mt-4">
                        Style: HM6804-600
                    </h4><h4 className="scroll-m-20 text-lg font-normal mt-4">
                        Country/Region of Origin: Vietnam
                    </h4><h4 className="scroll-m-20 text-lg font-normal mt-4">
                        Country/Region of Origin: Vietnam
                    </h4>


                    <Button asChild className="hover:bg-secondary hover:text-foreground hover:border [&:not(:first-child)]:mt-12 py-4 lg:py-6 lg:text-lg rounded-3xl">
                        <Link href="/product/pre-order">
                            Pre-Order Now
                            <ArrowRightIcon />
                        </Link>
                    </Button>
                </div>
            </section>

            <section>
                <h2 className="section-header">Item descriptions</h2>
                <ItemDescriptions />

                <h2 className='section-header'>Features</h2>
                <FeatureCard />

                <h2 className='section-header'>Surveys</h2>
                <Surveys />
            </section>
        </main >
    )
}