
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { Play, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleVideoClick = (projectId: string) => {
    setPlayingVideo(playingVideo === projectId ? null : projectId);
  };

  const closeModal = () => {
    setPlayingVideo(null);
  };

  return (
    <section id="work" className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
          <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-[8px] md:text-xs mb-3 md:mb-4">Portfolio</h3>
          <h2 className="font-display text-3xl md:text-5xl lg:text-7xl">SELECTED PROJECTS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 md:gap-10">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative scroll-reveal opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden rounded-lg md:rounded-xl bg-zinc-900">
                {/* Show YouTube Player if video is playing (Desktop only) */}
                {playingVideo === project.id && project.youtubeId && !isMobile ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {/* YouTube Thumbnail or Regular Thumbnail */}
                    <img
                      src={
                        project.youtubeId
                          ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`
                          : project.thumbnail
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    {/* Click to Play Overlay */}
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-all duration-500 hover:bg-black/40"
                      onClick={() => project.youtubeId && handleVideoClick(project.id)}
                    >
                      <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                          <Play fill="white" size={24} className="ml-1 md:hidden" />
                          <Play fill="white" size={32} className="ml-1 hidden md:block" />
                        </div>
                        <span className="text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-semibold">Click to Play</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4 md:mt-6 flex justify-between items-start">
                <div>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1 md:mb-2 block">
                    {project.category}
                  </span>
                  <h4 className="font-display text-lg md:text-2xl tracking-wide group-hover:text-zinc-300 transition-colors">
                    {project.title}
                  </h4>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-zinc-800 transition-all cursor-pointer">
                  <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-125 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 text-center">
          <Link
            to="/projects"
            className="inline-block px-8 py-4 md:px-12 md:py-5 border border-zinc-800 hover:border-white transition-all duration-500 rounded-full text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold"
          >
            View All Experiments
          </Link>
        </div>
      </div>

      {/* Mobile Video Modal */}
      {playingVideo && isMobile && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${PROJECTS.find(p => p.id === playingVideo)?.youtubeId}?autoplay=1`}
                title="Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
