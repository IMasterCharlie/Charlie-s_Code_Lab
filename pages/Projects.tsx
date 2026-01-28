

import React, { useState, useEffect } from 'react';
import { PROJECTS, WEB_DEV_PROJECTS } from '../constants';
import { Play, ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    const [playingVideo, setPlayingVideo] = useState<string | null>(null);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        // Reveal animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleVideoClick = (projectId: string) => {
        setPlayingVideo(playingVideo === projectId ? null : projectId);
    };


    return (
        <div className="min-h-screen bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="uppercase tracking-[0.3em] text-xs font-bold">Back to Home</span>
                    </Link>

                    <h1 className="font-display text-6xl md:text-8xl mb-6">
                        ALL PROJECTS
                    </h1>
                    <p className="text-zinc-400 text-lg max-w-2xl">
                        A comprehensive collection of my video editing work and web development projects.
                        Each piece represents dedication to quality and creative storytelling.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {PROJECTS.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative scroll-reveal opacity-0 translate-y-10 transition-all duration-1000"
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="relative aspect-video overflow-hidden rounded-xl bg-zinc-900">
                                {/* Show YouTube Player if video is playing */}
                                {playingVideo === project.id && project.youtubeId ? (
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
                                                <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                                                    <Play fill="white" size={32} className="ml-1" />
                                                </div>
                                                <span className="text-sm uppercase tracking-[0.3em] font-semibold">Click to Play</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="mt-6">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-2 block">
                                    {project.category}
                                </span>
                                <h4 className="font-display text-2xl tracking-wide group-hover:text-zinc-300 transition-colors mb-2">
                                    {project.title}
                                </h4>
                                <p className="text-zinc-500 text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Web Development Projects Section */}
                <div className="mt-32">
                    <div className="mb-16">
                        <h2 className="font-display text-5xl md:text-7xl mb-4">
                            WEB DEVELOPMENT
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            Full-stack web applications and responsive websites built with modern technologies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {WEB_DEV_PROJECTS.map((project, index) => (
                            <div
                                key={project.id}
                                className="group relative scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 bg-zinc-950/50 rounded-2xl overflow-hidden border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/50"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="font-display text-2xl mb-3 group-hover:text-zinc-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-zinc-500 text-sm mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-xs uppercase tracking-wider text-zinc-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 mt-4">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
                                            >
                                                <ExternalLink size={14} />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-zinc-700 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                                            >
                                                <Github size={14} />
                                                Code
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center border-t border-zinc-800 pt-16">
                    <h3 className="font-display text-4xl md:text-6xl mb-6">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                        Let's collaborate and create something exceptional together.
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-block px-12 py-5 bg-white text-black rounded-full uppercase tracking-[0.3em] font-bold text-xs hover:scale-105 transition-transform duration-500"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Projects;
