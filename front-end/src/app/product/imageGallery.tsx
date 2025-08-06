"use client"

import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { useState } from 'react'

const images: string[] = [
    "/images/prod4.webp",
    "/images/prod.png",
    "/images/prod4.webp",
    "/images/prod.png",
]

export default function ImageGallery() {
    const [current, setCurrent] = useState(0);

    const scrollTo = (index: number) => {
        if (index >= 0 && index < images.length) {
            setCurrent(index);
        }
    };

    return (
        <div className="relative w-80 sm:w-120 h-100 sm:h-160">
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
                    className="px-4 py-2 mr-4 bg-gray-200 rounded shadow"
                >
                    <ArrowLeft size={16} />
                </button>
                <button
                    onClick={() => scrollTo(current + 1)}
                    disabled={current === images.length - 1}
                    className="px-4 py-2 bg-gray-200 rounded shadow"
                >
                    <ArrowRight size={16} />
                </button>
            </div>
        </div>
    )
}