
import React from 'react';
import { TOOLS } from '../constants';

const Tools: React.FC = () => {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-xs mb-4">Weaponry</h3>
          <h2 className="font-display text-4xl">PRO POST-PRODUCTION STACK</h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center group">
              <div className="w-20 h-20 md:w-28 md:h-28 flex items-center justify-center p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl group-hover:border-zinc-500 group-hover:bg-zinc-900 transition-all duration-500 relative">
                <img 
                  src={tool.logo} 
                  alt={tool.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl" />
              </div>
              <span className="mt-4 text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
