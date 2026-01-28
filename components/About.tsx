
import React from 'react';
import { TrendingUp, Target, BarChart3, Megaphone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-40 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12 md:mb-20 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-[8px] md:text-xs mb-3 md:mb-4">Our Expertise</h3>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl mb-4 md:mb-8 leading-tight">
            DIGITAL MARKETING <br />
            <span className="text-zinc-500 italic font-serif lowercase tracking-normal">that drives results.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed">
            We combine creative storytelling with data-driven strategies to help brands grow their online presence,
            engage their audience, and achieve measurable results across all digital platforms.
          </p>
        </div>



        {/* Stats Section */}
        <div className="mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-400">
          <div className="text-center p-4 md:p-6 border-t border-zinc-800">
            <div className="font-display text-3xl md:text-5xl mb-1 md:mb-2">500+</div>
            <div className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500">Happy Clients</div>
          </div>
          <div className="text-center p-4 md:p-6 border-t border-zinc-800">
            <div className="font-display text-3xl md:text-5xl mb-1 md:mb-2">2M+</div>
            <div className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500">Reach Generated</div>
          </div>
          <div className="text-center p-4 md:p-6 border-t border-zinc-800">
            <div className="font-display text-3xl md:text-5xl mb-1 md:mb-2">95%</div>
            <div className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500">Client Retention</div>
          </div>
          <div className="text-center p-4 md:p-6 border-t border-zinc-800">
            <div className="font-display text-3xl md:text-5xl mb-1 md:mb-2">5+</div>
            <div className="text-[8px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500">Years Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
