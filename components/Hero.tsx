
import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video/Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2560"
          alt="Cinematic Background"
          className="w-full h-full object-cover opacity-40 scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h2 className="text-zinc-500 uppercase tracking-[0.3em] text-sm mb-6 animate-[fade-in-up_1s_ease-out_forwards]">
          Creative Professional & Digital Craftsman
        </h2>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight tracking-tight animate-[fade-in-up_1.2s_ease-out_forwards]">
          CRAFTING STORIES <br />
          <span className="text-zinc-500">THROUGH MOTION</span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 animate-[fade-in-up_1.4s_ease-out_forwards]">
          Video editing, content creation, brand promos, and website development. Transforming your vision into compelling digital experiences that captivate and convert.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 animate-[fade-in-up_1.6s_ease-out_forwards]">
          <button
            onClick={() => setShowModal(true)}
            className="group flex items-center space-x-3 bg-white text-black px-10 py-5 rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:scale-105 transition-all duration-500"
          >
            <span className="p-1 bg-black rounded-full text-white group-hover:rotate-12 transition-transform duration-500">
              <Play size={12} fill="currentColor" />
            </span>
            <span>Watch Showreel</span>
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 border border-white/20 text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all duration-500"
          >
            Discuss Project
          </button>
        </div>
      </div>

      {/* Showreel Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-6xl mx-6 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full border border-white/20 transition-all duration-300 group"
            >
              <X size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Video Player */}
            <video
              src="/SHOWREEL.mp4"
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
