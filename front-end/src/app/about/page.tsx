import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import PreviewImage from '@/components/PreviewImage'

export const metadata: Metadata = {
    title: 'About ObstaX | Our Mission and Team',
    description:
        'Meet the ObstaX team and learn how we build assistive wearable technology with the visually impaired community.',
    openGraph: {
        title: 'About ObstaX | Our Mission and Team',
        description:
            'Meet the ObstaX team and learn how we build assistive wearable technology with the visually impaired community.',
        url: '/about',
        siteName: 'ObstaX',
        images: [
            {
                url: '/images/og/obstax-about.png',
                width: 1200,
                height: 630,
                alt: 'ObstaX team and collaboration partners',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About ObstaX | Our Mission and Team',
        description:
            'Meet the ObstaX team and learn how we build assistive wearable technology with the visually impaired community.',
        images: ['/images/og/obstax-about.png'],
    },
}


const teamMembers = [
    {
        name: 'Koay Chong Hau, Co-Founder',
        role: 'Co-founder leading hardware design and field testing, focused on building durable, user-friendly assistive tech for the visually impaired.',
        bio: 'Leads assistive hardware R&D with a focus on safety, comfort, and reliability.',
        imageSrc: '/images/koaychonghau.jpeg',
    },
    {
        name: 'Lam Yu En (Samuel), Co-Founder',
        role: 'Co-Founder driving software, and outreach, while building strong relationships with users and partners.',
        bio: 'Shapes human-centered product experiences with a focus on clarity and dignity.',
        imageSrc: '/images/lamyuen.jpeg',
    },
]

const collaborationPartner = [
    {
        name: 'Singapore Association of the Visually Handicapped (SAVH)',
        description: 'We have been collaborating closely with SAVH since June 2023. Through multiple rounds of validation, prototype testing, and interviews with clients of SAVH and members of the visually impaired community, we ensure that real-world feedback directly shapes every iteration of ObstaX Mini.',
        imageSrc: '/images/savh-logo.png',
    },
    {
        name: "SUTD Venture, Innovation & Entrepreneurship",
        description: "SUTD VIE has been an invaluable partner in our journey, providing mentorship, resources, and funding opportunities that have propelled ObstaX from concept to prototype. Their support has enabled us to refine our technology, validate our ideas, and connect with a broader network of innovators and industry experts.",
        imageSrc: '/images/sutd-vie-logo.png',
    }
]

const awardsAndPress = [
    {
        title: 'Create4Good Innovation Funds 2024',
        description: 'ObstaX was awarded the Create4Good Innovation Fund 2024 in recognition of our work in developing assistive technology that addresses real-world challenges faced by the visually impaired community. The support from Create4Good has enabled us to further validate our prototype, conduct user testing, and advance the development of ObstaX Mini toward real-world deployment.',
        imageSrc: '/images/awards/obstax-c4g.webp',
        href: 'https://sutdc4g.com/',
    },
    {
        title: 'Baby Shark Fund Jul 2024 & Mar 2025',
        description: 'The Baby Shark Fund by SUTD VIE supports early-stage student startups in validating and developing innovative ideas. ObstaX received funding in July 2024 and March 2025 to support continued development of ObstaX Mini.',
        imageSrc: '/images/awards/baby-shark-fund.webp',
        href: 'https://www.sutd.edu.sg/future-of-innovation/use-cases/baby-shark-fund-dai-projects/',
    },
    {
        title: 'SUTD SAA 2025 - Entrepreneurial Spirit Award',
        description: 'Recognised for demonstrating risk-taking and creativity in positively impacting the visually impaired community by enhancing accessibility and promoting independence.',
        imageSrc: '/images/awards/saa2025.jpeg',
        imageClassName: 'object-top',
        href: 'https://www.sutd.edu.sg/campus-life/student-life/student-awards/student-achievement-awards/2025-winners/',
    },
    {
        title: 'SUTD InspireCon 2025',
        description: 'ObstaX was invited to showcase our work at SUTD InspireCon 2025, where we demonstrated the ObstaX Mini and pitched our vision for assistive technology directly to Tharman Shanmugaratnam. The opportunity highlighted ObstaX as a promising student-led venture focused on real-world impact, accessibility, and inclusive innovation.',
        imageSrc: '/images/obstax-with-pres-tharman.jpg',
        href: 'https://www.linkedin.com/feed/update/urn:li:activity:7318182501825339393',
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
                            ObstaX is a Singapore-based assistive technology startup, incorporated in February 2024 and
                            founded by a team with backgrounds in engineering, product design, and artificial intelligence (AI).
                        </p>
                        <p>
                            We build wearable technologies that expand independence for people who are blind or have low
                            vision - designed with safety, dignity, and intuitive everyday use at the core.
                        </p>
                        <p>
                            Our work is grounded in direct, first-hand feedback from the visually impaired community.
                            Every prototype is shaped by real-world navigation challenges and refined through hands-on
                            testing. We are committed to creating reliable, human-centered wearables that feel natural to
                            use and empower confident mobility in daily life.
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

            <section>
                <h2 className="section-header">Our team</h2>
                <div id="features-scroll" className="mt-8 flex flex-col gap-6 md:flex-row md:gap-3 md:overflow-x-auto md:scroll-smooth md:no-scrollbar">
                    {teamMembers.map((t, index) => (
                        <Card key={index} className="md:w-80 md:min-h-60 md:flex-shrink-0">
                            <Image
                                src={t.imageSrc}
                                alt={t.name}
                                width={400}
                                height={200}
                                className="h-64 w-full object-contain "
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

            <section>
                <h2 className="section-header">Collaboration partner</h2>
                {collaborationPartner.map((partner) => (
                    <Card className="mt-8" key={partner.name}>
                        <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:items-center">
                            <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted">
                                <Image
                                    src={partner.imageSrc}
                                    alt={partner.name}
                                    width={360}
                                    height={240}
                                    className="h-full w-full object-contain bg-white p-6"
                                />
                            </div>
                            <div className="space-y-3">
                                <h3 className="text-2xl font-semibold text-foreground">
                                    {partner.name}
                                </h3>
                                <p className="text-muted-foreground">
                                    {partner.description}
                                </p>

                            </div>
                        </div>

                    </Card>
                ))}
            </section>

            <section>
                <h2 className="section-header">Awards & press mentions</h2>
                <div className="mt-8 space-y-6">
                    {awardsAndPress.map((item) => (
                        <Card key={item.title}>
                            <div className="flex flex-col gap-6 pl-6 pr-6 md:flex-row md:items-start">
                                <div className="h-48 w-full overflow-hidden rounded-2xl border border-border/60 bg-muted md:h-56 md:w-[40%]">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        width={320}
                                        height={320}
                                        className={`h-full w-full object-cover ${item.imageClassName || ''}`}
                                    />
                                </div>
                                <div className="flex flex-1 flex-col gap-3 md:min-h-[14rem]">
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

            <section className="mt-12 mb-16">
                <div className="rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/10 via-secondary/70 to-transparent px-6 py-8 shadow-lg ring-1 ring-primary/20 md:px-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-foreground">Any Inquiry? Feel free to contact us</h3>
                            <p className="text-muted-foreground">
                                We typically reply within 1-2 business days.
                            </p>
                        </div>
                        <Button
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
