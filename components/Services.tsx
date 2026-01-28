
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-20 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-[8px] md:text-xs mb-3 md:mb-4">Capabilities</h3>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl">ELEVATE YOUR CONTENT</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group relative h-[300px] md:h-[450px] overflow-hidden rounded-xl md:rounded-2xl scroll-reveal opacity-0 translate-y-10 transition-all duration-1000`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-display text-lg md:text-3xl mb-2 md:mb-4 group-hover:text-white transition-colors">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 0 ? '' : 'text-zinc-500'}> {word}</span>
                  ))}
                </h4>
                <p className="text-zinc-400 text-[10px] md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-white transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
