"use client"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type TestimonialProps = {
    name: string;
    quote: string;
};

const testimonials: TestimonialProps[] = [
    {
        name: "Uncle Tan, 59 years old",
        quote:
            "Before ObstaX, I was always nervous taking the MRT alone. Now, I feel much more confident and independent in public spaces.",
    },
    {
        name: "Aisha, 42 years old",
        quote:
            "ObstaX gives me freedom. I can walk to the hawker center, do groceries, and meet friends without needing someone by my side.",
    },
    {
        name: "Mr. Koh, 67 years old",
        quote:
            "It’s like having a smart assistant guiding me. I no longer hesitate at traffic crossings or bus stops.",
    },
    {
        name: "Nurul, 25 years old",
        quote:
            "I use ObstaX daily. The gentle vibrations and voice alerts are discreet but effective. It's truly empowering.",
    },
    {
        name: "Mdm Wong, 70 years old",
        quote:
            "Even my family feels reassured when I go out alone now. ObstaX helps me live with dignity.",
    },
    {
        name: "Rajesh, 38 years old",
        quote:
            "As someone with partial vision, ObstaX bridges the gap between dependency and independence.",
    },
];

export default function TestimonialCard() {
    return (
        <div className="mt-6 relative">
            <h2 className="scroll-m-20 text-3xl font-bold mt-16 lg:text-4xl">Testimonials</h2>
            <div id="testimonial-scroll" className="scroll-cards no-scrollbar">
                {testimonials.map((t, index) => (
                    <Card key={index} className="w-80 min-h-40 md:min-h-60 flex-shrink-0 m-1">
                        <CardHeader>
                            <CardTitle>{t.name}</CardTitle>
                        </CardHeader>

                        <CardContent>
                            <p className="text-muted-foreground text-normal">{t.quote}</p>
                        </CardContent>
                    </Card>
                ))}


            </div>

            <div className="flex justify-end gap-4 mt-4">
                <button
                    onClick={() => {
                        document.getElementById("testimonial-scroll")?.scrollBy({ left: -340, behavior: "smooth" });
                    }}
                    className="scroll-button"
                >
                    ←
                </button>
                <button
                    onClick={() => {
                        document.getElementById("testimonial-scroll")?.scrollBy({ left: 340, behavior: "smooth" });
                    }}
                    className="scroll-button"
                >
                    →
                </button>
            </div>
        </div>
    );
}
