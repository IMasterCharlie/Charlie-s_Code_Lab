
import React, { useState, useRef, useEffect } from 'react';

const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const beforeVideoRef = useRef<HTMLVideoElement>(null);
  const afterVideoRef = useRef<HTMLVideoElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setSliderPos(percentage);
  };

  // Sync video playback
  useEffect(() => {
    const beforeVideo = beforeVideoRef.current;
    const afterVideo = afterVideoRef.current;

    if (!beforeVideo || !afterVideo) return;

    const syncVideos = () => {
      if (beforeVideo && afterVideo) {
        afterVideo.currentTime = beforeVideo.currentTime;
      }
    };

    beforeVideo.addEventListener('timeupdate', syncVideos);

    return () => {
      beforeVideo.removeEventListener('timeupdate', syncVideos);
    };
  }, []);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-4">The Magic</h3>
          <h2 className="font-display text-5xl md:text-7xl mb-6">RAW TO CINEMATIC</h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-sm">
            Drag the slider to see how professional editing and color grading transforms raw footage into cinematic excellence.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-video w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/5 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Video (Edited & Color Graded) */}
          <div className="absolute inset-0">
            <video
              ref={afterVideoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              className="w-full h-full object-cover brightness-110 contrast-110 saturate-125"
              loop
              muted
              autoPlay
              playsInline
            />
          </div>

          {/* Before Video (Raw/Flat Footage - Same Video, Different Grade) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <video
              ref={beforeVideoRef}
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              className="w-full h-full object-cover saturate-50 brightness-90 contrast-90 sepia-[0.15]"
              loop
              muted
              autoPlay
              playsInline
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="flex space-x-1">
                <div className="w-1 h-3 bg-black rounded-full" />
                <div className="w-1 h-3 bg-black rounded-full" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase tracking-widest z-20 pointer-events-none">
            Raw Footage
          </div>
          <div className="absolute top-6 right-6 px-4 py-2 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase tracking-widest z-20 pointer-events-none">
            Edited & Graded
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
