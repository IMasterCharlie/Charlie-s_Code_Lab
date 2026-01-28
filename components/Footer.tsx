import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-display text-xl tracking-widest text-white leading-none">CHARLIE'S</span>
          <span className="text-[10px] tracking-[0.4em] text-zinc-600 font-semibold">CODE LAB</span>
        </div>

        <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Charlie's Code Lab. All rights reserved.
        </p>

        <div className="flex gap-8">
          <Link to="/privacy" className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em]">Privacy</Link>
          <Link to="/terms" className="text-zinc-600 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em]">Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
