import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import ImageGallery from './imageGallery'
import ItemDescriptions from '@/components/cards/ItemDescription'
import FeatureCard from '@/components/cards/Features'
import Surveys from '@/components/cards/Surveys'

export default function Product() {
    const items = [
        "Designed for blind and visually impaired individuals seeking greater confidence and independence in their daily lives — from navigating public transport to identifying everyday items indoor and outdoor.",
        "Single press - Activate scene recognition in front of you",
        "Long press - Query about your surroundings.",
        "Country of Origin: Singapore",
    ];

    return (
        <main className="page">

            <section className='flex flex-col sm:flex-row gap-10 sm:mt-16 mt-8'>
                {/* <div id='itemDescription' className='sm:hidden'>
                    <h1 className="scroll-m-20 text-2xl font-semibold lg:text-2xl">ObstaX 1.0</h1>
                    <h4 className="scroll-m-20 text-lg font-light mt-0">Pendant and Wristbands</h4>
                    <h4 className="scroll-m-20 text-xl font-normal mt-4">S$ 609</h4>
                </div> */}

                <ImageGallery />

                <div id='descriptionColumn' className='flex flex-col sm:w-120'>
                    <div id='itemDescription' className='hidden sm:inline'>
                        <h1 className="scroll-m-20 text-2xl font-semibold lg:text-2xl">ObstaX Mini</h1>
                        <h4 className="scroll-m-20 text-lg font-light mt-0">AI Pendant</h4>
                        {/* <h2 className="scroll-m-20 text-xl font-normal mt-4">S$ 209</h2> */}
                        <h2 className="scroll-m-20 text-lg font-normal mt-4 text-muted-foreground">Early Bird Pricing - TBA</h2>
                    </div>

                    {items.map((item, idx) => (
                        <h4 key={idx} className="scroll-m-20 text-lg font-light mt-4">
                            {item}
                        </h4>
                    ))}



                    {/* <Button asChild className="button hover:bg-secondary hover:text-foreground hover:border py-4 lg:py-6 lg:text-lg rounded-3xl [&:not(:first-child)]:mt-12">
                        <Link href="/product/pre-order">
                            Pre-Order Now
                            <ArrowRightIcon />
                        </Link>
                    </Button> */}
                    <Button asChild className="button hover:bg-secondary hover:text-foreground hover:border py-4 lg:py-6 lg:text-lg rounded-3xl [&:not(:first-child)]:mt-12">
                        <Link href="https://forms.gle/ULs82urQdHTjpYN79" target="_blank" rel="noopener noreferrer">
                            Register Interest
                            <ExternalLinkIcon />
                        </Link>
                    </Button>
                </div>
            </section>

            <section>
                <h2 className="section-header" id='description'>Item descriptions</h2>
                <ItemDescriptions />

                <h2 className='section-header' id='features'>Features</h2>
                <FeatureCard />

                <h2 className='section-header' id='surveys'>Surveys</h2>
                <Surveys />
            </section>
        </main >
    )
}