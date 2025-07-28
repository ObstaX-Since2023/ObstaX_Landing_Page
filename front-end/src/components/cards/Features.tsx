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
];

export default function FeatureCard() {
    return (
        <div className="flex flex-wrap gap-4 mt-6">
            {features.map((t, index) => (
                <Card key={index} className="w-80 min-h-40 md:min-h-60">

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
    );
}