"use client"

import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'

type CountdownEvent = {
  id: string
  title: string
  description: string
  startsAt: string
  ctaLabel: string
  ctaHref: string
}

const countdownEvents: CountdownEvent[] = [
  {
    id: 'beta-testers',
    title: 'ObstaX Mini - Beta Testing',
    description: 'Be among the first 5 individuals to experience ObstaX Mini. Your feedback will directly shape the final product and help us ensure it truly empowers the VI community.',
    startsAt: '2026-02-07T00:00:00',
    ctaLabel: 'Sign Up',
    ctaHref: 'https://forms.gle/MYEV7NqE4UBfFZkt7',
  },
  {
    id: 'soft-launch',
    title: 'ObstaX Mini - Soft Launch',
    description: 'Register your interest today to secure early access for you or your caretaker. Get priority onboarding, the latest product updates, and an exclusive early bird discount when we launch.',
    startsAt: '2026-04-01T00:00:00',
    ctaLabel: 'Register Interest',
    ctaHref: 'https://forms.gle/ULs82urQdHTjpYN79',
  },
]

const formatDate = (value: string) =>
  new Intl.DateTimeFormat('en-SG', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))

const getTimeLeft = (targetMs: number, nowMs: number) => {
  const delta = Math.max(0, targetMs - nowMs)
  const totalSeconds = Math.floor(delta / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, isLive: targetMs <= nowMs }
}

const CountdownSegment = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center rounded-2xl border border-border/60 bg-card/70 px-4 py-3 text-center" aria-hidden="true">
    <span className="text-2xl font-semibold tabular-nums sm:text-3xl">{String(value).padStart(2, '0')}</span>
    <span className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted-foreground">{label}</span>
  </div>
)

export default function CountdownTimeline() {
  const [now, setNow] = useState(() => Date.now())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedEvents = useMemo(
    () =>
      countdownEvents.map((event) => ({
        ...event,
        formattedDate: formatDate(event.startsAt),
        targetMs: new Date(event.startsAt).getTime(),
      })),
    []
  )

  return (
    <div className="mt-8 space-y-6">
      {formattedEvents.map((event) => {
        const timeLeft = mounted
          ? getTimeLeft(event.targetMs, now)
          : { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: false }

        return (
          <div
            key={event.id}
            className="rounded-3xl border border-border/60 bg-card/40 p-6 shadow-sm"
          >
            <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_minmax(0,0.8fr)] md:items-center">
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-2">
                  <CountdownSegment value={timeLeft.days} label="Days" />
                  <CountdownSegment value={timeLeft.hours} label="Hrs" />
                  <CountdownSegment value={timeLeft.minutes} label="Min" />
                  <CountdownSegment value={timeLeft.seconds} label="Sec" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
                  {timeLeft.isLive ? 'Live now' : 'Time until start'}
                </p>
                <p className="sr-only" aria-live="polite">
                  {timeLeft.isLive
                    ? `${event.title} is live now.`
                    : `${event.title} starts in ${timeLeft.days} days, ${timeLeft.hours} hours, and ${timeLeft.minutes} minutes.`}
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-foreground">{event.title}</h3>
                <p className="text-base text-muted-foreground">{event.description}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                  Starts {event.formattedDate}
                </p>
              </div>

              <Button
                asChild
                className="w-full rounded-3xl border border-transparent px-6 py-4 text-base hover:border hover:bg-secondary hover:text-foreground"
              >
                <Link href={event.ctaHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  {event.ctaLabel}
                  <ExternalLinkIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
