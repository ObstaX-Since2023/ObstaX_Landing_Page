"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Image from "next/image";

type FeatureCardProps = {
    name: string;
    description: string;
    imageSrc: string;
    alt?: string;
};

const features: FeatureCardProps[] = [
    {
        name: "Haptic Feedback",
        imageSrc: "/images/prod.png",
        description: "Haptic Feedback description.",
        alt: "Haptic Feedback Image",
    },
    {
        name: "Haptic Feedback",
        imageSrc: "/images/prod.png",
        description: "Haptic Feedback description.",
        alt: "Haptic Feedback Image",
    },
    {
        name: "Haptic Feedback",
        imageSrc: "/images/prod.png",
        description: "Haptic Feedback description.",
        alt: "Haptic Feedback Image",
    },
    {
        name: "Haptic Feedback",
        imageSrc: "/images/prod.png",
        description: "Haptic Feedback description.",
        alt: "Haptic Feedback Image",
    },
    {
        name: "Haptic Feedback",
        imageSrc: "/images/prod.png",
        description: "Haptic Feedback description.",
        alt: "Haptic Feedback Image",
    },
];

export default function FeatureCard() {
    return (
        <>
            <h2 className="scroll-m-20 text-3xl font-bold sm:mt-16 mt-12 lg:text-4xl">Product features</h2>
            <div id="features-scroll" className="scroll-cards no-scrollbar">
                {features.map((t, index) => (
                    <Card key={index} className="w-80 min-h-40 md:min-h-60 flex-shrink-0 m-1">

                        <Image
                            src={t.imageSrc}
                            alt={t.alt || t.name}
                            width={400}
                            height={200}
                            className="object-cover w-full h-48"
                        />

                        <CardHeader>
                            <CardTitle>{t.name}</CardTitle>
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
                        document.getElementById("features-scroll")?.scrollBy({ left: -320, behavior: "smooth" });
                    }}
                    className="px-4 py-1 bg-gray-200 rounded"
                >
                    ←
                </button>
                <button
                    onClick={() => {
                        document.getElementById("features-scroll")?.scrollBy({ left: 320, behavior: "smooth" });
                    }}
                    className="px-4 py-1 bg-gray-200 rounded"
                >
                    →
                </button>
            </div>
        </>
    );
}