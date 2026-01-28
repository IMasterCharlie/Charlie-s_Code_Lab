
export interface Project {
  id: string;
  title: string;
  category: 'Reels' | 'Cinematic' | 'YouTube' | 'Brand';
  thumbnail: string;
  videoUrl: string;
  youtubeId?: string;
  description: string;
}

export interface WebDevProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Tool {
  name: string;
  logo: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  image: string;
  bio: string;
  whatsapp?: string;
  instagram?: string;
  email?: string;
}
