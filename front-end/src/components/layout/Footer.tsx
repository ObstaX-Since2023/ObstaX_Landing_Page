import Link from "next/link";
import { Icon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-300 w-full px-8 sm:px-16 py-16 sm:py-24 mt-16 sm:min-h-80">
            <div className="flex flex-col max-w-7xl sm:px-16 mx-auto w-full">

                <div className="flex justify-between mb-16">
                    <div className="flex flex-col mb-4">
                        <Link href="/about" className="text-base font-medium text-gray-800 hover:text-gray-600 mb-3">
                            Our company
                        </Link>
                        <Link href="/" className="text-base font-medium text-gray-800 hover:text-gray-600 mb-3">
                            Support us
                        </Link>
                        <Link href="/product" className="text-base font-medium text-gray-800 hover:text-gray-600 mb-3">
                            Our products
                        </Link>
                    </div>

                    <div className="flex flex-col mb-4">
                        <p className="text-base font-medium text-gray-800 mb-3">
                            Contact us
                        </p>
                        <Link href="https://wa.me/6588508275?text=Hi%2C%20I%20would%20like%20to%20ask%20for%20more%20details%20about%20ObstaX."
                            className="text-base font-normal underline text-gray-800 hover:text-gray-600 mb-3"
                            target="_blank"
                            rel="noopener noreferrer">
                            WhatsApp
                        </Link>
                        <Link href="mailto:obstax@outlook.com" className="text-base font-normal underline text-gray-800 hover:text-gray-600 mb-3"
                            target="_blank"
                            rel="noopener noreferrer">
                            Email
                        </Link>
                        <Link href="https://www.linkedin.com/company/obstax" className="text-base font-normal underline text-gray-800 hover:text-gray-600 mb-3"
                            target="_blank"
                            rel="noopener noreferrer">
                            LinkedIn
                        </Link>
                    </div>

                    <div className="flex flex-col mb-4">
                        <Link href="/" className="text-base font-medium text-gray-800 hover:text-gray-600 mb-3">
                            Terms and conditions
                        </Link>
                        <Link href="/" className="text-base font-medium text-gray-800 hover:text-gray-600 mb-3">
                            Privacy policy
                        </Link>
                    </div>

                    {/* <div className="flex flex-col mb-4">
                        <p className="text-base font-medium text-gray-800 mb-3">
                            Receive articles, tips, and offers from ObstaX
                        </p>
                        <div className="flex">
                            <input type="email" className="w-full p-2 border border-gray-300 rounded-md bg-white" placeholder="Enter your email address" />
                        </div>
                    </div> */}

                </div>

                <p className="text-sm text-gray-600">
                    © {new Date().getFullYear()} ObstaX Pte. Ltd. | All rights reserved.
                </p>
            </div>
        </footer>
    );
}