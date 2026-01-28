
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { X, MessageCircle, Instagram, Mail } from 'lucide-react';

const Team: React.FC = () => {
    const [expandedMember, setExpandedMember] = useState<string | null>(null);

    const handleCardClick = (memberId: string) => {
        setExpandedMember(memberId);
    };

    const handleClose = () => {
        setExpandedMember(null);
    };

    const selectedMember = TEAM_MEMBERS.find(m => m.id === expandedMember);

    const getWhatsAppLink = (phone: string) => {
        return `https://wa.me/${phone.replace(/[^0-9]/g, '')}`;
    };

    const getInstagramLink = (username: string) => {
        return `https://instagram.com/${username}`;
    };

    const getEmailLink = (email: string) => {
        return `mailto:${email}`;
    };

    return (
        <section id="team" className="py-16 md:py-24 lg:py-32 bg-black relative">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-12 md:mb-16 scroll-reveal opacity-0 translate-y-10 transition-all duration-1000">
                    <h3 className="text-zinc-500 uppercase tracking-[0.4em] text-[8px] md:text-xs mb-3 md:mb-4">The Team</h3>
                    <h2 className="font-display text-3xl md:text-5xl lg:text-7xl mb-4 md:mb-6">
                        MY TEAM
                    </h2>
                    <p className="text-zinc-400 text-sm md:text-lg max-w-2xl mx-auto">
                        Meet the talented professionals behind our creative work. Each member brings unique expertise
                        and passion to deliver exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div
                            key={member.id}
                            className="scroll-reveal opacity-0 translate-y-10 transition-all duration-1000 group cursor-pointer"
                            style={{ transitionDelay: `${index * 100}ms` }}
                            onClick={() => handleCardClick(member.id)}
                        >
                            <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700 transition-all duration-500">
                                {/* Image */}
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                                    {/* Info Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                        <h3 className="font-display text-lg md:text-2xl mb-1 text-white">
                                            {member.name}
                                        </h3>
                                        <p className="text-zinc-400 text-[10px] md:text-sm font-bold uppercase tracking-wider mb-1 md:mb-2">
                                            {member.role}
                                        </p>
                                        <p className="text-zinc-500 text-[9px] md:text-xs">
                                            {member.expertise}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Expanded Modal */}
            {expandedMember && selectedMember && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-start md:items-center justify-center pt-4 pb-20 md:p-8"
                    onClick={handleClose}
                >
                    <div
                        className="relative w-[85%] md:w-full max-w-4xl max-h-[calc(100vh-6rem)] md:max-h-[85vh] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/80 rounded-full transition-all"
                        >
                            <X size={24} className="text-white" />
                        </button>

                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative aspect-[1/1] md:aspect-[3/4]">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </div>

                            {/* Info Side */}
                            <div className="p-4 md:p-12 flex flex-col justify-center">
                                <div className="mb-3 md:mb-6">
                                    <p className="text-zinc-500 uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-xs mb-1 md:mb-3">Team Member</p>
                                    <h2 className="font-display text-xl md:text-4xl lg:text-5xl mb-1 md:mb-3">{selectedMember.name}</h2>
                                    <p className="text-zinc-400 text-[10px] md:text-sm font-bold uppercase tracking-wide md:tracking-wider mb-1 md:mb-2">
                                        {selectedMember.role}
                                    </p>
                                    <p className="text-zinc-500 text-[10px] md:text-sm mb-2 md:mb-6 line-clamp-2 md:line-clamp-none">
                                        {selectedMember.expertise}
                                    </p>
                                </div>

                                <div className="border-t border-zinc-800 pt-3 md:pt-6">
                                    <h3 className="text-zinc-400 uppercase tracking-wide md:tracking-wider text-[9px] md:text-xs mb-2 md:mb-4">About</h3>
                                    <p className="text-zinc-300 text-xs md:text-base leading-snug md:leading-relaxed line-clamp-4 md:line-clamp-none">
                                        {selectedMember.bio}
                                    </p>
                                </div>

                                {/* Social Contact Icons */}
                                {(selectedMember.whatsapp || selectedMember.instagram || selectedMember.email) && (
                                    <div className="border-t border-zinc-800 pt-3 md:pt-4 mt-3 md:mt-4">
                                        <h3 className="text-zinc-400 uppercase tracking-wide md:tracking-wider text-[9px] md:text-xs mb-2 md:mb-3">Contact</h3>
                                        <div className="flex gap-2 md:gap-3">
                                            {selectedMember.whatsapp && (
                                                <a
                                                    href={getWhatsAppLink(selectedMember.whatsapp)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-zinc-800 hover:bg-green-600 rounded-full transition-all duration-300"
                                                    title="WhatsApp"
                                                >
                                                    <MessageCircle size={16} className="md:hidden" />
                                                    <MessageCircle size={20} className="hidden md:block" />
                                                </a>
                                            )}
                                            {selectedMember.instagram && (
                                                <a
                                                    href={getInstagramLink(selectedMember.instagram)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-zinc-800 hover:bg-pink-600 rounded-full transition-all duration-300"
                                                    title="Instagram"
                                                >
                                                    <Instagram size={16} className="md:hidden" />
                                                    <Instagram size={20} className="hidden md:block" />
                                                </a>
                                            )}
                                            {selectedMember.email && (
                                                <a
                                                    href={getEmailLink(selectedMember.email)}
                                                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-zinc-800 hover:bg-blue-600 rounded-full transition-all duration-300"
                                                    title="Email"
                                                >
                                                    <Mail size={16} className="md:hidden" />
                                                    <Mail size={20} className="hidden md:block" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Team;
