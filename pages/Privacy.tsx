import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-6xl mb-12">Privacy Policy</h1>

                <div className="space-y-8 text-zinc-400">
                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">1. Information We Collect</h2>
                        <p className="leading-relaxed">
                            We collect information you provide directly to us when you fill out our contact form, including your name, email address, and message content. We use this information solely to respond to your inquiries and potential collaboration requests.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">2. How We Use Your Information</h2>
                        <p className="leading-relaxed">
                            The information we collect is used to:
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Communicate with you regarding your project needs.</li>
                                <li>Provide you with quotes and service information.</li>
                                <li>Improve our services and website experience.</li>
                            </ul>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">3. Data Protection</h2>
                        <p className="leading-relaxed">
                            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. We do not sell or share your personal information with third parties for marketing purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">4. Contact Us</h2>
                        <p className="leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us via the form on our homepage or email us directly.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
