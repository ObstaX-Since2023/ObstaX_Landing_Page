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
    name: string;
    description: string;
    imageSrc: string;
    alt?: string;
};

const features: FeatureCardProps[] = [
    {
        name: "Bus Number Identification",
        imageSrc: "/images/prod.png",
        description:
            "Quickly identifies the bus number through the camera and reads it aloud to help users board the correct bus confidently.",
        alt: "Object detection visualization",
    },
    {
        name: "Currency Note Detection",
        imageSrc: "/images/prod.png",
        description:
            "Recognizes common currency denominations (e.g., SGD, MYR) and announces the amount, reducing the risk of mispayment or fraud.",
        alt: "Indoor navigation concept",
    },
    {
        name: "Scene Recognition",
        imageSrc: "/images/prod.png",
        description:
            "Provides a brief description of the surrounding scene — such as “You are facing a zebra crossing” or “A person is standing in front of you.”",
        alt: "Voice assistant speaking",
    },
    {
        name: "Internet Q&A",
        imageSrc: "/images/prod.png",
        description:
            'Ask general questions (e.g., "What time is it?" or "Where is the nearest ATM?") and receive spoken answers powered by real-time AI.',
        alt: "Haptic feedback wearable",
    },
    {
        name: "Single Button Image Capture",
        imageSrc: "/images/prod.png",
        description:
            "Easy, tactile button allows users to capture an image at any time. The device will then process and describe the scene or answer based on the context.",
        alt: "Help button on device",
    },
    {
        name: "Bluetooth Phone Bridge (Coming Soon)",
        imageSrc: "/images/prod.png",
        description:
            "Connects to a smartphone for faster responses or additional features using your phone's internet, while keeping the wearable lightweight.",
        alt: "Help button on device",
    },
];


export default function FeatureCard() {
    return (
        <>
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