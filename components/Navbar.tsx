
import React, { useState, useEffect } from 'react';
import { Home, Briefcase, Info, Mail, Cog, Users } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section based on scroll position
      const sections = ['home', 'about', 'services', 'work', 'team', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? '' : section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileNavItems = [
    { name: 'Home', href: '#', icon: Home, id: 'home' },
    { name: 'About', href: '#about', icon: Info, id: 'about' },
    { name: 'Services', href: '#services', icon: Cog, id: 'services' },
    { name: 'Work', href: '#work', icon: Briefcase, id: 'work' },
    { name: 'Team', href: '#team', icon: Users, id: 'team' },
    { name: 'Contact', href: '#contact', icon: Mail, id: 'contact' },
  ];

  return (
    <>
      {/* Desktop/Tablet Navbar - Hidden on Mobile */}
      <nav className={`hidden md:block fixed top-0 w-full z-[110] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 md:border-b border-white/5' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className="font-display text-2xl tracking-widest text-white leading-none">CHARLIE'S</span>
            <span className="text-[10px] tracking-[0.4em] text-zinc-500 font-semibold">CODE LAB</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#contact" className="px-6 py-2 border border-white/20 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-full">
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-[110] md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
        <div className="flex justify-around items-center px-4 py-3">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.name}
                href={item.href}
                className="flex flex-col items-center gap-1 flex-1 transition-all duration-300"
                onClick={() => setActiveSection(item.id)}
              >
                <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-white text-black' : 'bg-transparent text-zinc-400'}`}>
                  <Icon size={20} />
                </div>
                <span className={`text-[9px] uppercase tracking-wider font-semibold transition-colors duration-300 ${isActive ? 'text-white' : 'text-zinc-500'}`}>
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
