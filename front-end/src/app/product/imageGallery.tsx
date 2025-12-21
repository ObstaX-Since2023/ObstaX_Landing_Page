"use client"

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { useState } from 'react'

const images: string[] = [
    "/images/obstax_mini_prodct_image_2.JPG",
    "/images/prod4.webp",
    "/images/prod.png",
    "/images/prod4.webp",
    "/images/prod.png",
    "/images/obstax_mini_prodct_image.JPG",
]

export default function ImageGallery() {
    const [current, setCurrent] = useState(0);

    const scrollTo = (index: number) => {
        if (index >= 0 && index < images.length) {
            setCurrent(index);
        }
    };

    return (
        <div className="relative w-full sm:w-120 h-100 sm:h-160">
            {/* Main Image Display */}
            <Image
                src={images[current]}
                alt={`Main image ${current + 1}`}
                fill
                className="object-contain rounded-md border"
            />

            <div className="absolute bottom-4 right-4">
                <button
                    onClick={() => scrollTo(current - 1)}
                    disabled={current === 0}
                    className="button px-4 py-2 mr-4 bg-slate-200 rounded shadow "
                >
                    <ArrowLeft size={16} />
                </button>
                <button
                    onClick={() => scrollTo(current + 1)}
                    disabled={current === images.length - 1}
                    className="button px-4 py-2 bg-slate-200 rounded shadow"
                >
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    )
}