"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react";

import Image from "next/image";

type FeatureCardProps = {
    title: string;
    description: string;
    imageSrc: string;
    alt?: string;
};

const features: FeatureCardProps[] = [
    {
        title: 'Bus Number Identification',
        description:
            'ObstaX Mini detects approaching buses and reads the bus number aloud, so you can board the correct bus independently, without needing to stop every bus, ask the driver, or rely on people around you.',
        imageSrc: '/images/featurelist/bus.jpg',
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
        imageSrc: '/images/prod.png',
        alt: 'Scene recognition visual',
    },
    {
        title: 'Internet Q&A',
        description:
            'Ask everyday questions, such as the time, nearby places, or general information—and receive real-time spoken answers.',
        imageSrc: '/images/prod.png',
        alt: 'Voice Q&A visual',
    },
    {
        title: 'One-Button Capture',
        description:
            'A single button captures an image and instantly explains what is in front of you. No menus, No complexity.',
        imageSrc: '/images/prod.png',
        alt: 'Single button capture visual',
    },
    {
        title: 'Bluetooth Phone App (Coming Soon)',
        description:
            'Optionally connect to your phone for quicker processing, while keeping ObstaX Mini compact, lightweight, and comfortable to wear all day.',
        imageSrc: '/images/prod.png',
        alt: 'Bluetooth bridge visual',
    },
];


export default function FeatureCard() {
    return (
        <>
            <div id="features-scroll" className="mt-6 flex gap-3 overflow-x-auto scroll-smooth no-scrollbar">
                {features.map((t, index) => (
                    <Card key={index} className="w-80 min-h-40 md:min-h-60 flex-shrink-0 m-1">

                        <Image
                            src={t.imageSrc}
                            alt={t.alt || t.title}
                            width={400}
                            height={200}
                            className="object-cover w-full h-48"
                        />

                        <CardHeader>
                            <CardTitle>{t.title}</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-muted-foreground">{t.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={() => {
                        document.getElementById("features-scroll")?.scrollBy({ left: -340, behavior: "smooth" });
                    }}
                    className="button px-4 py-2 bg-gray-200 rounded"
                >
                    <ArrowLeft size={16} />
                </button>
                <button
                    onClick={() => {
                        document.getElementById("features-scroll")?.scrollBy({ left: 340, behavior: "smooth" });
                    }}
                    className="button px-4 py-2 bg-gray-200 rounded"
                >
                    <ArrowRight size={16} />
                </button>
            </div>
        </>
    );
}
