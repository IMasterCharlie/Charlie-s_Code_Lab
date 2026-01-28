
import { Project, Service, Testimonial, Tool, WebDevProject, TeamMember } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Creative Vision',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200',
    videoUrl: '',
    youtubeId: 'vXezw_O1qIE',
    description: 'Stunning visual storytelling and creative editing.'
  },
  {
    id: '2',
    title: 'Story-telling',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200',
    videoUrl: '',
    youtubeId: 'X6c8Ttm-Ogo',
    description: 'High-impact short-form content with explosive energy.'
  },
  {
    id: '3',
    title: 'Engaging Reels',
    category: 'Reels',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200',
    videoUrl: '',
    youtubeId: 'FJIzlnBGXoY',
    description: 'Fast-paced vertical content designed for maximum engagement.'
  },
  {
    id: '4',
    title: 'Premium Production',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1600880210819-35b6c02075b9?auto=format&fit=crop&q=80&w=1200',
    videoUrl: '',
    youtubeId: '4hZR-MA0WSI',
    description: 'Professional-grade video production and editing.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Video Editing',
    description: 'Full post-production pipeline from raw footage to final export.',
    imageUrl: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    title: 'Website Developing',
    description: 'Modern, responsive websites built with cutting-edge technologies.',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    title: 'Brand Promos',
    description: 'High-end visual assets that represent your brand value.',
    imageUrl: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    title: 'Content Creation',
    description: 'Captivating content designed to engage and inspire your audience.',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Priya Sharma',
    role: 'Marketing Manager, TechVista Solutions',
    content: "They delivered our video on time and it looked amazing. The editing really made our brand stand out. Totally recommend them!",
    avatar: 'https://picsum.photos/seed/priya/200'
  },
  {
    id: 't2',
    name: 'Rahul Mehta',
    role: 'YouTube Content Creator',
    content: "These guys changed my channel. My watch time went up and the videos look so much better now. Super creative and always quick to reply.",
    avatar: 'https://picsum.photos/seed/rahul/200'
  },
  {
    id: 't3',
    name: 'Jessica Williams',
    role: 'Event Coordinator, Celebration Events',
    content: "The wedding videos they made were so beautiful. Clients keep asking for their contact. They capture every special moment perfectly.",
    avatar: 'https://picsum.photos/seed/jessica/200'
  },
  {
    id: 't4',
    name: 'Amit Patel',
    role: 'Founder, FitLife Coaching',
    content: "My fitness brand grew so fast after their promo videos. They work super quick and always listen to my ideas.",
    avatar: 'https://picsum.photos/seed/amit/200'
  }
];

export const TOOLS: Tool[] = [
  { name: 'Adobe Premiere Pro', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg' },
  { name: 'After Effects', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg' },
  { name: 'DaVinci Resolve', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg' },
  { name: 'Final Cut Pro', logo: 'https://logosear.ch/wp-content/uploads/2022/06/Final-Cut-Pro-logo.png' },
  { name: 'Topaz Video AI', logo: 'https://seeklogo.com/images/T/topaz-labs-logo-92C2275C75-seeklogo.com.png' },
  { name: 'Runway ML', logo: 'https://logosear.ch/wp-content/uploads/2023/06/Runway-logo.png' },
  { name: 'Pika Labs', logo: 'https://asset.brandfetch.io/idQVGbrvAi/id9A5JOr8m.png' },
  { name: 'Envato Elements', logo: 'https://seeklogo.com/images/E/envato-logo-E93408F0B4-seeklogo.com.png' },
  { name: 'CapCut', logo: 'https://asset.brandfetch.io/id7tPXI-Pa/idR3BURjL7.svg' },
  { name: 'WonderShare Filmora', logo: 'https://seeklogo.com/images/W/wondershare-filmora-logo-1D6C072A0A-seeklogo.com.png' },
  { name: 'Shotcut', logo: 'https://seeklogo.com/images/S/Shotcut-logo-5CA88A9856-seeklogo.com.png' },
  { name: 'Gemini', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' }
];

export const WEB_DEV_PROJECTS: WebDevProject[] = [
  {
    id: 'web1',
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
    thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'web2',
    title: 'Portfolio Website',
    description: 'Modern portfolio website with smooth animations and responsive design.',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=1200',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'web3',
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time updates and team features.',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    techStack: ['Next.js', 'Firebase', 'Redux'],
    liveUrl: '#'
  },
  {
    id: 'web4',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for managing multiple social media accounts in one place.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    techStack: ['Vue.js', 'Chart.js', 'REST API'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'web5',
    title: 'Blog CMS',
    description: 'Content management system for bloggers with rich text editor and SEO optimization.',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200',
    techStack: ['React', 'Express', 'PostgreSQL'],
    githubUrl: '#'
  },
  {
    id: 'web6',
    title: 'Weather App',
    description: 'Real-time weather forecasting app with location-based services and interactive maps.',
    thumbnail: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=1200',
    techStack: ['React', 'Weather API', 'Maps API'],
    liveUrl: '#',
    githubUrl: '#'
  }
];



export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team1',
    name: 'Adnan',
    role: 'Creative Director',
    expertise: 'Brand Strategy & Creative Vision',
    image: './Adnan.jpeg',
    bio: 'With over 8 years of experience in creative leadership, Adnan brings a unique blend of artistic vision and strategic thinking to every project. He specializes in crafting compelling brand narratives that resonate with audiences and drive business growth. His portfolio includes successful campaigns for Fortune 500 companies and emerging startups alike.',
    whatsapp: '+91 6300158483',
    instagram: 'abuadnan_4',
    email: 'mohammadadnankhan820@gmail.com'
  },
  {
    id: 'team2',
    name: 'Arbaaz',
    role: 'Lead Video Editor',
    expertise: 'Video Production & Post-Production',
    image: './Arbaaz.jpeg',
    bio: 'Arbaaz is a master storyteller with 6+ years of experience in video editing and production. From cinematic commercials to engaging social content, he transforms raw footage into captivating visual stories. Expert in Adobe Premiere Pro, After Effects, and DaVinci Resolve, he has edited content that has garnered millions of views across platforms.',
    whatsapp: '+91 8186067170',
    instagram: 'arbaaz._.z6',
    email: 'arbaazmd33@gmail.com'
  },
  {
    id: 'team3',
    name: 'Matheen',
    role: 'Digital Marketing Specialist',
    expertise: 'Social Media & Content Marketing',
    image: './Matheen.jpeg',
    bio: 'Matheen is a digital marketing expert who lives and breathes social media trends. With 5+ years of experience, he has helped brands achieve 10x growth in engagement and reach. His data-driven approach to content strategy ensures every campaign delivers measurable results. He stays ahead of the curve with the latest platform algorithms and best practices.',
    whatsapp: '+91 8096276260',
    instagram: 'matheen__7190_',
    email: 'matheen23054@gmail.com'
  },
  {
    id: 'team4',
    name: 'Mehraj',
    role: 'Web Developer',
    expertise: 'Full-Stack Development & UI/UX',
    image: './Mehraj.jpeg',
    bio: 'Mehraj combines technical expertise with creative design thinking to build stunning web experiences. With 7+ years in full-stack development, he creates responsive, high-performance websites that not only look beautiful but also convert visitors into customers. Proficient in React, Node.js, and modern web technologies, he brings ideas to life through clean, maintainable code.',
    whatsapp: '+91 8309664356',
    instagram: 'mastercharlie786',
    email: 'imastercharlie@gmail.com'
  }
];
