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
        quote: "I love ObstaX because it helps me navigate the MRT safely and confidently. I love ObstaX because it helps me navigate the MRT safely and confidently. I love ObstaX because it helps me navigate the MRT safely and confidently.",
    },
    {
        name: "Aisha, 42 years old",
        quote: "Using ObstaX gave me more freedom to go outside alone.",
    },
    {
        name: "Mr. Koh, 67 years old",
        quote: "It's like having someone guide me without needing to ask for help.",
    },
    {
        name: "Mr. Koh, 67 years old",
        quote: "It's like having someone guide me without needing to ask for help.",
    },
    {
        name: "Mr. Koh, 67 years old",
        quote: "It's like having someone guide me without needing to ask for help.",
    },
    {
        name: "Mr. Koh, 67 years old",
        quote: "It's like having someone guide me without needing to ask for help.",
    },
    {
        name: "Mr. Koh, 67 years old",
        quote: "It's like having someone guide me without needing to ask for help.",
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
