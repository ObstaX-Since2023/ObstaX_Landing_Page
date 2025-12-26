export default function Privacy() {
    return (
        <main className="page">
            <section className="mt-10 space-y-6">
                <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Legal</p>
                    <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl">Privacy Policy</h1>
                    <p className="text-sm text-muted-foreground">Effective Date: 23 Dec 2025</p>
                </div>

                <p className="text-lg text-muted-foreground">
                    ObstaX Pte. Ltd. ("we," "our," or "ObstaX") is committed to protecting your privacy. This Privacy
                    Policy explains how we collect, use, and protect your information when you visit our website, sign
                    up for updates, participate in beta testing, or express interest in purchasing our products.
                </p>
            </section>

            <section className="mt-12 space-y-8 text-muted-foreground">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
                    <p>We collect personal information that you voluntarily provide through:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Beta tester registration forms</li>
                        <li>Early access or pre-order interest forms</li>
                        <li>Feedback or contact forms</li>
                    </ul>
                    <p>This may include:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>City / Country</li>
                        <li>Optional feedback or accessibility needs</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
                    <p>We use your information to:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Contact you about beta testing or onboarding</li>
                        <li>Provide updates about our product launch</li>
                        <li>Understand user needs and improve our offerings</li>
                        <li>Respond to inquiries or technical support requests</li>
                        <li>Manage internal testing logs (if you're a beta participant)</li>
                    </ul>
                    <p>We do not sell, rent, or share your data with third parties, except where required by law.</p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">3. Data Storage &amp; Security</h2>
                    <p>All data is securely stored using third-party platforms such as:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Google Forms / Google Sheets</li>
                        <li>Notion, Airtable, or similar productivity tools</li>
                        <li>ObstaX&apos;s internal storage with restricted access</li>
                    </ul>
                    <p>We take reasonable precautions to prevent unauthorized access, misuse, or loss of your information.</p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">4. Use by Beta Testers</h2>
                    <p>If you&apos;re a selected beta tester:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>We may record anonymized logs of usage feedback and device-related issues</li>
                        <li>Any feedback provided by you may be used to improve the product</li>
                        <li>All sensitive data remains confidential and used only within our team</li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">5. Cookies &amp; Analytics (if applicable)</h2>
                    <p>
                        Our website may use basic cookies or analytics tools (e.g., Google Analytics) to understand visitor behavior.
                        This data is anonymized and helps us improve the site experience.
                    </p>
                    <p>You can disable cookies via your browser settings.</p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
                    <p>You may:</p>
                    <ul className="list-disc space-y-2 pl-6">
                        <li>Request to access or update your information</li>
                        <li>Withdraw consent to be contacted</li>
                        <li>Ask us to delete your data at any time</li>
                    </ul>
                    <p>To do so, email us at <a className="font-bold" href="mailto:obstax@outlook.com">obstax@outlook.com</a></p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">7. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy as our product or website evolves. Changes will be posted here with an
                        updated effective date.
                    </p>
                </div>

                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-foreground">8. Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy or how your data is handled, please contact: <a className="font-bold" href="mailto:obstax@outlook.com">obstax@outlook.com</a></p>
                </div>
            </section>
        </main>
    )
}
