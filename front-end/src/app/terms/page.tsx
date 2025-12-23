export default function Terms() {
    return (
        <main className="page">
            <section className="mt-10 space-y-6">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Legal</p>
                    <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">Terms &amp; Conditions</h1>
                    <p className="text-sm text-muted-foreground">Effective Date: 23 Dec 2025</p>
                </div>

                <p className="text-lg text-muted-foreground">
                    Welcome to ObstaX. By accessing or using our website, signing up for early access, or participating
                    in beta testing or product trials, you agree to the following Terms and Conditions set out by
                    ObstaX Pte. Ltd. (UEN: 202407342N).
                </p>

                <p className="text-lg text-muted-foreground">Please read them carefully.</p>
            </section>

            <section className="mt-12 space-y-8 text-muted-foreground">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">1. Use of Site and Services</h2>
                    <p>You agree to use this website and our services lawfully and in good faith. You may not use our platform to:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Violate any applicable laws or regulations</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Misrepresent your identity or intentions during pre-order, registration, or feedback</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">2. Product Disclaimer</h2>
                    <p>
                        ObstaX Mini is currently under active development and soft launch. It is not a medically certified
                        device and is not intended to replace professional mobility aids, caregivers, or certified guide systems.
                    </p>
                    <p>
                        Our AI-powered features (e.g., object recognition, bus number detection, internet Q&amp;A) may occasionally
                        provide inaccurate or incomplete responses. Users should not rely solely on the device for safety-critical
                        navigation.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">3. Beta Testing Terms</h2>
                    <p>If you are participating in a beta testing program:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>You understand that the device is a prototype and may contain bugs or limitations.</li>
                        <li>You agree to use the device with caution and report any issues.</li>
                        <li>
                            ObstaX Pte. Ltd. is not liable for any incidental, indirect, or consequential harm resulting from the use
                            of pre-release hardware or software.
                        </li>
                        <li>You may be asked to provide feedback, which may be used to improve the product.</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">4. Orders and Pricing</h2>
                    <p>
                        All pricing and availability information on the site is subject to change without notice. Early bird pricing
                        may be offered in limited quantities and is not guaranteed.
                    </p>
                    <p>
                        Submitting a pre-order interest form does not guarantee a reservation or purchase. We reserve the right to
                        accept or reject orders at our sole discretion.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">5. Intellectual Property</h2>
                    <p>
                        All content on this site, including product designs, trademarks, logos, text, and media, are owned or
                        licensed by ObstaX Pte. Ltd. and may not be reused or reproduced without permission.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">6. Limitation of Liability</h2>
                    <p>To the fullest extent permitted by law, ObstaX Pte. Ltd. shall not be liable for:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Personal injury, property damage, or financial loss resulting from use or misuse of the device</li>
                        <li>Errors or delays in response from AI or cloud services</li>
                        <li>Loss of data or interruptions due to connectivity or technical limitations</li>
                    </ul>
                    <p>Your use of ObstaX Mini is at your own risk.</p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">7. Data and Privacy</h2>
                    <p>
                        We collect basic information (e.g., name, email, phone number) when you register interest or participate
                        in testing. This data is used only for communication, onboarding, and product updates. We do not sell or
                        share your information with third parties.
                    </p>
                    <p>
                        For full details, refer to our{' '}
                        <a href="/privacy" className="font-semibold text-foreground underline underline-offset-4">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">8. Changes to These Terms</h2>
                    <p>
                        We reserve the right to update these terms from time to time. Changes will be posted on this page with a
                        revised “Effective Date.” Continued use of our services constitutes acceptance of the updated terms.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">9. Contact</h2>
                    <p>For questions about these Terms or the ObstaX Mini program, contact us at: <a className="font-bold" href="mailto:obstax@outlook.com">obstax@outlook.com</a></p>
                </div>
            </section>
        </main>
    )
}
