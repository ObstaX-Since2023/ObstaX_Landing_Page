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
];

export default function TestimonialCard() {
    return (
        <div className="flex flex-wrap gap-4 mt-6">
            {testimonials.map((t, index) => (
                <Card key={index} className="w-80 min-h-40 md:min-h-60">
                    <CardHeader>
                        <CardTitle>{t.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{t.quote}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
