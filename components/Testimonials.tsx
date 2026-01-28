
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-[8px] md:text-xs mb-3 md:mb-4">Reputation</h3>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl uppercase">WHAT THEY SAY</h2>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto overflow-y-hidden -mx-6 px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className="relative p-8 bg-zinc-900/30 border border-white/5 rounded-2xl backdrop-blur-sm snap-center scroll-reveal opacity-0 translate-y-10 transition-all duration-1000"
                style={{
                  width: '85vw',
                  maxWidth: '400px',
                  transitionDelay: `${idx * 200}ms`
                }}
              >
                <Quote className="text-zinc-800 absolute top-6 right-6" size={32} />
                <p className="text-base font-serif italic mb-6 text-zinc-300 relative z-10 leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full border border-zinc-700 p-0.5" />
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">{t.name}</h4>
                    <p className="text-zinc-500 text-[9px] uppercase tracking-tight">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="relative p-12 bg-zinc-900/30 border border-white/5 rounded-3xl backdrop-blur-sm scroll-reveal opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <Quote className="text-zinc-800 absolute top-10 right-10" size={48} />
              <p className="text-xl md:text-2xl font-serif italic mb-10 text-zinc-300 relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border border-zinc-700 p-0.5" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm">{t.name}</h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-tighter">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
