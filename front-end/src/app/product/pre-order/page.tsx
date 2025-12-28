import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ObstaX | Pre-Order',
    description: 'Register your interest for ObstaX Mini pre-orders and early access.',
    openGraph: {
        title: 'ObstaX | Pre-Order',
        description: 'Register your interest for ObstaX Mini pre-orders and early access.',
        url: '/product/pre-order',
        siteName: 'ObstaX',
        images: [
            {
                url: '/images/og/obstax-preorder.png',
                width: 1200,
                height: 630,
                alt: 'ObstaX pre-order',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ObstaX | Pre-Order',
        description: 'Register your interest for ObstaX Mini pre-orders and early access.',
        images: ['/images/og/obstax-preorder.png'],
    },
}

export default function Product() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <h1 className="text-4xl font-bold">Pre-order Page</h1>
        </div>
    )
} 
