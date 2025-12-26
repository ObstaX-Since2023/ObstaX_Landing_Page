"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

type PreviewImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  containerClassName?: string
}

export default function PreviewImage({
  src,
  alt,
  width,
  height,
  className = '',
  containerClassName = '',
}: PreviewImageProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group relative block text-left ${containerClassName}`}
        aria-label={`Preview ${alt}`}
      >
        <Image src={src} alt={alt} width={width} height={height} className={className} />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-[inherit] bg-black/0 opacity-0 transition duration-200 group-hover:bg-black/30 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
            <ZoomIn className="h-3.5 w-3.5" />
            Preview
          </div>
        </div>
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-900 shadow-lg"
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </button>
            <Image
              src={src}
              alt={alt}
              width={width * 2}
              height={height * 2}
              className="h-full max-h-[85vh] w-full rounded-3xl object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
