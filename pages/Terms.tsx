import React, { useEffect } from 'react';

const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-24 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-6xl mb-12">Terms of Service</h1>

                <div className="space-y-8 text-zinc-400">
                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">1. Acceptance of Terms</h2>
                        <p className="leading-relaxed">
                            By accessing and using the Charlie's Code Lab portfolio website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">2. Intellectual Property</h2>
                        <p className="leading-relaxed">
                            All content on this website, including but not limited to text, graphics, logos, images, video clips, and software, is the property of Charlie's Code Lab or its content suppliers and is protected by international copyright laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">3. Services</h2>
                        <p className="leading-relaxed">
                            Our services typically include video editing, web development, and content creation. Specific terms for paid projects will be outlined in a separate service agreement or contract provided before the commencement of work.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-white text-xl md:text-2xl mb-4 font-display">4. Limitation of Liability</h2>
                        <p className="leading-relaxed">
                            In no event shall Charlie's Code Lab be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Terms;
