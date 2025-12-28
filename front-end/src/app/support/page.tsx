import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Support ObstaX | Fundraiser',
    description:
        'Support ObstaX as we prepare for soft launch with manufacturing and R&D for the BVI community.',
    openGraph: {
        title: 'Support ObstaX | Fundraiser',
        description:
            'Support ObstaX as we prepare for soft launch with manufacturing and R&D for the BVI community.',
        url: '/support',
        siteName: 'ObstaX',
        images: [
            {
                url: '/images/og/obstax-support.png',
                width: 1200,
                height: 630,
                alt: 'Support ObstaX fundraiser',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Support ObstaX | Fundraiser',
        description:
            'Support ObstaX as we prepare for soft launch with manufacturing and R&D for the BVI community.',
        images: ['/images/og/obstax-support.png'],
    },
}

export default function Support() {
    return (
        <main className="page">
            <section className="mt-10">
                <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">Support Us</h1>
            </section>

            <section className="mt-10">
                <div className="rounded-3xl border border-border/60 bg-card/40 p-6 md:p-8">
                    <div className="grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start">
                        <div className="space-y-6">
                            <h2 className="text-2xl font-semibold text-foreground md:text-4xl">Help Blind and Visually Impaired through ObstaX</h2>
                            <p className="text-base text-muted-foreground md:text-2xl">
                                Our Give.Asia fundraiser is live and focused on our soft launch. We are already in beta testing,
                                and we need significant financial support for manufacturing and R&amp;D to prepare a safe, reliable
                                product for the blind and visually impaired (BVI) community.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <Button asChild className="button w-full rounded-3xl px-8 py-4 text-sm hover:bg-secondary hover:text-foreground hover:border lg:px-10 lg:py-6 lg:text-lg">
                                    <Link
                                        href="https://give.asia/campaign/guide-blindvisuallyimpaired-with-obstax"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Support us on Give.Asia
                                        <ExternalLinkIcon />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted md:ml-auto md:max-w-xs">
                            <div className="aspect-[4/5] w-full">
                                <img
                                    src="/images/give-asia.png"
                                    alt="ObstaX fundraiser preview"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 
