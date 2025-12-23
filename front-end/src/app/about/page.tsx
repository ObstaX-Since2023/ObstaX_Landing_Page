import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import PreviewImage from '@/components/PreviewImage'


const teamMembers = [
    {
        name: 'Koay Chong Hau, Co-Founder',
        role: 'Co-founder leading hardware design and field testing, focused on building durable, user-friendly assistive tech for the visually impaired.',
        bio: 'Leads assistive hardware R&D with a focus on safety, comfort, and reliability.',
        imageSrc: '/images/koaychonghau.jpeg',
    },
    {
        name: 'Lam Yu En (Samuel), Co-Founder',
        role: 'Co-founder driving AI, software, and user experience — ensuring ObstaX Mini delivers fast, accurate voice feedback in real-world conditions.',
        bio: 'Shapes human-centered product experiences with a focus on clarity and dignity.',
        imageSrc: '/images/lamyuen.jpeg',
    },
]

const awardsAndPress = [
    {
        title: 'Create4Good Innovation Funds 2024',
        description: 'Recognized for early-stage prototypes that advance independent mobility. ',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://sutdc4g.com/',
    },
    {
        title: 'Baby Shark Fund Jul 2024 & Mar 2025',
        description: 'Invited to share our roadmap for accessible navigation in 2026.',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://www.sutd.edu.sg/future-of-innovation/use-cases/baby-shark-fund-dai-projects/',
    },
    {
        title: 'SUTD Student Achievement Award 2025',
        description: 'Featured in the Q3 special on emerging assistive-tech teams in Asia.',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://example.com/straits-innovation-review',
    },
    {
        title: 'SUTD InspireCon 2025',
        description: 'Featured in the Q3 special on emerging assistive-tech teams in Asia.',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://example.com/straits-innovation-review',
    },
    {
        title: 'SUTD Open House 2025',
        description: 'Featured in the Q3 special on emerging assistive-tech teams in Asia.',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://example.com/straits-innovation-review',
    },
    {
        title: 'SUTD Open House 2026 (Coming Soon)',
        description: 'Featured in the Q3 special on emerging assistive-tech teams in Asia.',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://example.com/straits-innovation-review',
    },
]

export default function About() {
    return (
        <main className="page">
            <section className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
                <div className="space-y-6">

                    <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">Who Are We</h1>
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>
                            ObstaX is a Singapore-based company incorporated in Feb 2024, founded by a team of young talents with engineering,
                            product design, and AI backgrounds. We build assistive technology that expands independence
                            for people who are blind or have low vision, with a focus on safety, dignity, and intuitive
                            everyday use.
                        </p>
                        <p>
                            Our work is grounded in lived feedback from the visually impaired community, and every
                            prototype is shaped by real-world navigation needs. We are committed to building reliable
                            wearables that feel natural to use and empower confident mobility.
                        </p>
                    </div>
                </div>
                <PreviewImage
                    src="/images/obstax-with-pres-tharman.jpg"
                    alt="ObstaX team with the president"
                    width={640}
                    height={520}
                    containerClassName="rounded-3xl shadow-lg"
                    className="h-full w-full rounded-2xl object-cover"
                />
            </section>

            <section className="mt-16">
                <h2 className="section-header">Our team</h2>
                <div id="features-scroll" className="scroll-cards no-scrollbar">
                    {teamMembers.map((t, index) => (
                        <Card key={index} className="w-80 min-h-40 md:min-h-60 flex-shrink-0 m-1">
                            <Image
                                src={t.imageSrc}
                                alt={t.name}
                                width={400}
                                height={200}
                                className="h-64 w-full object-contain bg-muted"
                            />

                            <CardHeader>
                                <CardTitle>{t.name}</CardTitle>
                            </CardHeader>

                            <CardContent>
                                <p className="text-muted-foreground">{t.role}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </section>

            <section className="mt-16">
                <h2 className="section-header">Awards & Press</h2>
                <div className="mt-8 space-y-6">
                    {awardsAndPress.map((item) => (
                        <Card key={item.title}>
                            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start">
                                <div className="h-48 w-full overflow-hidden rounded-2xl border border-border/60 bg-muted md:h-48 md:w-[40%]">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        width={320}
                                        height={240}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-3 md:min-h-[12rem]">
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                    <p className="text-muted-foreground">{item.description}</p>
                                    <p className="mt-auto text-muted-foreground">
                                        Read more{' '}
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="font-semibold text-foreground underline underline-offset-4 transition hover:text-primary"
                                        >
                                            here
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>

                        </Card>
                    ))}
                </div>
            </section>

            <section className="mt-16 mb-20">
                <div className="rounded-3xl border border-primary/20 bg-secondary/70 px-6 py-8 shadow-sm md:px-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-foreground">Let’s talk—tell us what you need.</h3>
                            <p className="text-muted-foreground">
                                We read every message and usually reply within 1-2 business days.
                            </p>
                        </div>
                        <Button
                            asChild
                            className="rounded-3xl px-8 py-6 text-base hover:bg-secondary hover:text-foreground hover:border"
                        >
                            <a href="mailto:obstax@outlook.com">Open mail app</a>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
