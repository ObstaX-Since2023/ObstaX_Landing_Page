import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Feature = {
    title: string
    description: string
    imageSrc: string
    alt?: string
}

const features: Feature[] = [
    {
        title: 'Bus Number Identification',
        description:
            'ObstaX Mini detects approaching buses and reads the bus number aloud, so you can board the correct bus independently, without needing to stop every bus, ask the driver, or rely on people around you.',
        imageSrc: '/images/featurelist/bus-145.jpg',
        alt: 'Bus number detection visual',
    },
    {
        title: 'Currency Note Detection',
        description:
            'Instantly recognizes common currency denominations and announces the amount. It can also help you add up values or calculate change, making everyday payments easier and more accurate.',
        imageSrc: '/images/featurelist/cash.jpg',
        alt: 'Currency note identification visual',
    },
    {
        title: 'Scene Recognition',
        description:
            'With a single press, ObstaX Mini summarizes your immediate surroundings using clear, concise audio descriptions within seconds, to support safer navigation.',
        imageSrc: '/images/featurelist/scene-recog.png',
        alt: 'Scene recognition visual',
    },
    {
        title: 'Internet Q&A',
        description:
            'Ask everyday questions, such as the time, nearby places, or general information—and receive real-time spoken answers.',
        imageSrc: '/images/featurelist/internet-qna.png',
        alt: 'Voice Q&A visual',
    },
    {
        title: 'One-Button Capture',
        description:
            'A single button captures an image and instantly explains what is in front of you. No menus, No complexity.',
        imageSrc: '/images/featurelist/one-button.png',
        alt: 'Single button capture visual',
    },
    {
        title: 'Bluetooth Phone App (Coming Soon)',
        description:
            'Optionally connect to your phone for quicker processing, while keeping ObstaX Mini compact, lightweight, and comfortable to wear all day.',
        imageSrc: '/images/featurelist/bluetooth-app.png',
        alt: 'Bluetooth bridge visual',
    },
]

export default function FeatureList() {
    return (
        <div className="mt-8 space-y-6">
            {features.map((feature, index) => (
                <Card key={feature.title} className="overflow-hidden">
                    <div className="grid gap-6 p-6 md:grid-cols-2 md:items-center">
                        <div className={`overflow-hidden rounded-2xl border border-border/60 bg-muted ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                            <Image
                                src={feature.imageSrc}
                                alt={feature.alt || feature.title}
                                width={520}
                                height={360}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className="text-3xl md:text-4xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-0 pb-0">
                                <p className="text-lg leading-relaxed text-muted-foreground md:text-3xl">{feature.description}</p>
                            </CardContent>
                        </div>
                    </div>
                </Card>
            ))}
        </div>
    )
}
