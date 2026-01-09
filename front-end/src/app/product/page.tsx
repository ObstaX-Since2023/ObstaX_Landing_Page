import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'
import ImageGallery from './imageGallery'
import ItemDescriptions from '@/components/cards/ItemDescription'
import FeatureCard from '@/components/cards/Features'
import Surveys from '@/components/cards/Surveys'

export const metadata: Metadata = {
    title: 'ObstaX Mini | AI Wearable Pendant',
    description:
        'Explore ObstaX Mini, an AI-powered wearable pendant designed for blind and visually impaired users.',
    openGraph: {
        title: 'ObstaX Mini | AI Wearable Pendant',
        description:
            'Explore ObstaX Mini, an AI-powered wearable pendant designed for blind and visually impaired users.',
        url: '/product',
        siteName: 'ObstaX',
        images: [
            {
                url: '/images/og/obstax-product.png',
                width: 1200,
                height: 630,
                alt: 'ObstaX Mini AI wearable pendant',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ObstaX Mini | AI Wearable Pendant',
        description:
            'Explore ObstaX Mini, an AI-powered wearable pendant designed for blind and visually impaired users.',
        images: ['/images/og/obstax-product.png'],
    },
}

export default function Product() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://obstax.sg'
    const productJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'ObstaX Mini',
        description:
            'AI-powered wearable pendant designed for blind and visually impaired users.',
        image: [`${siteUrl}/images/og/obstax-product.png`],
        brand: {
            '@type': 'Brand',
            name: 'ObstaX',
        },
        url: `${siteUrl}/product`,
        category: 'Assistive Technology',
    }

    const items = [
        "ObstaX Mini is a lightweight, wearable AI pendant built for blind and visually impaired individuals. With a simple button press, it helps you understand what's around you, whether you're navigating public transport, identifying everyday items, or exploring new environments indoors and outdoors.",
        "Single press - Capture what's in front of you and receive a clear spoken description of your surroundings within seconds.",
        "Long press - Ask a question about what you're seeing or your environment and get a spoken response.",
        " ",
        "Country of Origin: Singapore",
    ];

    return (
        <main className="page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
            />

            <section className='flex flex-col sm:flex-row gap-10 sm:mt-16 mt-8'>
                <div id='itemDescription' className='sm:hidden'>
                    <h1 className="scroll-m-20 text-2xl font-semibold lg:text-2xl">ObstaX Mini</h1>
                    <h4 className="scroll-m-20 text-lg font-light mt-0">AI-Powered Wearable Pendant</h4>
                    <h2 className="scroll-m-20 text-lg font-normal mt-4 text-muted-foreground">Early Bird Pricing - To be announced</h2>
                </div>

                <ImageGallery />

                <div id='descriptionColumn' className='flex flex-col sm:w-120'>
                    <div id='itemDescription' className='hidden sm:inline'>
                        <h1 className="scroll-m-20 text-2xl font-semibold lg:text-2xl">ObstaX Mini</h1>
                        <h4 className="scroll-m-20 text-lg font-light mt-0">AI-Powered Wearable Pendant</h4>
                        <h2 className="scroll-m-20 text-lg font-normal mt-4 text-muted-foreground">Early Bird Pricing - To be announced</h2>
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
                {/* <h2 className="section-header" id='description'>Item descriptions</h2>
                <ItemDescriptions /> */}

                <h2 className='section-header' id='features'>Product Features</h2>
                <FeatureCard />

                {/* <h2 className='section-header' id='surveys'>Surveys</h2>
                <Surveys /> */}
            </section>
        </main >
    )
}
