
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import BeforeAfter from './BeforeAfter';
import Team from './Team';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SplashScreen from './SplashScreen';

const Home: React.FC = () => {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = () => {
        setShowSplash(false);
        // Auto-scroll to hero section (smooth scroll to top)
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
    };

    useEffect(() => {
        // Reveal animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
            <main className="relative z-10">
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <BeforeAfter />
                <Team />
                <Testimonials />
                <Contact />
            </main>
        </>
    );
};

export default Home;
