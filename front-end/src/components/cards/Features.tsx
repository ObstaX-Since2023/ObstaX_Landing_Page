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
        name: "Real-Time Object Detection",
        imageSrc: "/images/prod.png",
        description:
            "Detects obstacles in your path and alerts you instantly through vibration and voice cues.",
        alt: "Object detection visualization",
    },
    {
        name: "GPS-Free Indoor Navigation",
        imageSrc: "/images/prod.png",
        description:
            "Navigate malls, MRT stations, or HDB blocks without relying on internet or GPS signals.",
        alt: "Indoor navigation concept",
    },
    {
        name: "Multi-Language Voice Assistant",
        imageSrc: "/images/prod.png",
        description:
            "Understand your surroundings through a voice assistant that speaks in English or Mandarin.",
        alt: "Voice assistant speaking",
    },
    {
        name: "Wearable Haptic Feedback",
        imageSrc: "/images/prod.png",
        description:
            "Smart vibrations let you feel directions and alerts intuitively, hands-free.",
        alt: "Haptic feedback wearable",
    },
    {
        name: "One-Touch Help Access",
        imageSrc: "/images/prod.png",
        description:
            "Contact caregivers or loved ones with a single button for emergencies or assistance.",
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