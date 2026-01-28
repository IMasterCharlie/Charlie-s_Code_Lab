
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
    onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [animationPhase, setAnimationPhase] = useState<'enter' | 'show' | 'exit'>('enter');

    useEffect(() => {
        // Phase 1: Enter animation (0-1000ms)
        const enterTimer = setTimeout(() => {
            setAnimationPhase('show');
        }, 1000);

        // Phase 2: Hold (1000ms-4000ms) - text fully revealed for 3 seconds
        const holdTimer = setTimeout(() => {
            setAnimationPhase('exit');
        }, 4000);

        // Phase 3: Exit with upward scroll (4000ms-5000ms)
        const exitTimer = setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 5000);

        return () => {
            clearTimeout(enterTimer);
            clearTimeout(holdTimer);
            clearTimeout(exitTimer);
        };
    }, [onComplete]);

    if (!isVisible) return null;

    return (
        <div
            className={`fixed inset-0 z-[300] bg-black flex items-center justify-center transition-transform duration-1000 ease-in-out ${animationPhase === 'exit' ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <div className="text-center">
                {/* Main Brand Text */}
                <div className="overflow-hidden">
                    <h1
                        className={`font-display text-5xl md:text-7xl lg:text-9xl tracking-widest text-white leading-none transition-all duration-1000 ${animationPhase === 'enter'
                            ? 'opacity-0 translate-y-20 scale-95'
                            : 'opacity-100 translate-y-0 scale-100'
                            }`}
                    >
                        CHARLIE'S
                    </h1>
                </div>

                <div className="overflow-hidden mt-4">
                    <h2
                        className={`text-lg md:text-2xl lg:text-3xl tracking-[0.4em] text-zinc-500 font-semibold transition-all duration-1000 delay-300 ${animationPhase === 'enter'
                            ? 'opacity-0 translate-y-20'
                            : 'opacity-100 translate-y-0'
                            }`}
                    >
                        CODE LAB
                    </h2>
                </div>

                {/* Animated underline */}
                <div className="mt-10 flex justify-center">
                    <div
                        className={`h-[2px] bg-white transition-all duration-1000 delay-700 ${animationPhase === 'enter' ? 'w-0' : 'w-40 md:w-64'
                            }`}
                    />
                </div>

                {/* Company Tagline */}
                <div className="mt-8">
                    <p
                        className={`text-zinc-400 text-sm md:text-base lg:text-lg tracking-wide transition-all duration-1000 delay-1000 ${animationPhase === 'enter'
                            ? 'opacity-0 translate-y-10'
                            : 'opacity-100 translate-y-0'
                            }`}
                    >
                        Design | Develop | Deliver | Services.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
