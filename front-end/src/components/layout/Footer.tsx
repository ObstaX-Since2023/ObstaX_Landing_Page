import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-slate-300 w-full px-8 sm:px-16 py-16 sm:py-24 mt-14 sm:min-h-60">
            <div className="flex flex-col max-w-7xl sm:px-16 mx-auto w-full">

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                    <div className="flex flex-col mb-4">
                        <Link href="/about" className="footer-link" target="_blank" rel="noopener noreferrer">
                            Our company
                        </Link>
                        <Link href="/support" className="footer-link" target="_blank" rel="noopener noreferrer">
                            Support us
                        </Link>
                        <Link href="/product" className="footer-link" target="_blank" rel="noopener noreferrer">
                            Our products
                        </Link>
                    </div>

                    <div className="flex flex-col mb-4">
                        <p className="text-base font-medium text-gray-800 mb-3">
                            Contact us
                        </p>
                        <Link href="https://wa.me/6588508275?text=Hi%2C%20I%20would%20like%20to%20ask%20for%20more%20details%20about%20ObstaX."
                            className="footer-external-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            WhatsApp
                        </Link>
                        <Link href="mailto:obstax@outlook.com" className="footer-external-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            Email
                        </Link>
                        <Link href="https://www.linkedin.com/company/obstax" className="footer-external-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            LinkedIn
                        </Link>
                    </div>

                    <div className="flex flex-col mb-4">
                        <Link href="/terms" className="footer-link" target="_blank" rel="noopener noreferrer">
                            Terms and conditions
                        </Link>
                        <Link href="/privacy" className="footer-link" target="_blank" rel="noopener noreferrer">
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