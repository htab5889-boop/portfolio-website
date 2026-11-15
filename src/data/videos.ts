export interface VideoProject {
  id: string;
  title: string;
  category: 'motion-graphics' | 'promotional-editing' | 'travel-education' | 'vlogs';
  categoryLabel: string;
  videoUrl?: string; // Local MP4/MOV file path in /public (fallback)
  youtubeId?: string; // YouTube video ID for embed
  thumbnailOverride?: string; // Custom thumbnail path (overrides YouTube auto-thumb)
  description: string;
  softwareUsed: string[];
  clientType: string;
  colorGraded: boolean;
}

export const sampleVideos: VideoProject[] = [
  // ── Motion Graphics ──
  {
    id: 'mg-2',
    title: 'Motion Essentials — SaaS Product Animation',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    youtubeId: '79sDEluaNKY',
    thumbnailOverride: '/images/motion-essentials-thumb.jpg',
    description: 'A sleek SaaS-style motion graphics animation showcasing fluid UI transitions, kinetic typography, and modern product design language — crafted to elevate digital product storytelling.',
    softwareUsed: ['DaVinci Resolve', 'Fusion FX', 'Motion Design'],
    clientType: 'SaaS Product Demo',
    colorGraded: false,
  },
  {
    id: 'mg-1',
    title: 'Truth of Life — Motion Graphics Edit',
    category: 'motion-graphics',
    categoryLabel: 'Motion Graphics',
    videoUrl: '/videos/motion-graphics/truth-of-life.mov',
    description: 'A visually engaging motion graphics piece blending kinetic typography, animated transitions, and cinematic visual storytelling — entirely crafted in DaVinci Resolve.',
    softwareUsed: ['DaVinci Resolve', 'Fusion FX'],
    clientType: 'Creative Project',
    colorGraded: true,
  },

  // ── Promotional Edits ──
  {
    id: 'pe-1',
    title: 'A.R. Construction — Promotional Edit',
    category: 'promotional-editing',
    categoryLabel: 'Promotional Editing',
    youtubeId: 'BekuicAOY-4',
    description: 'High-impact promotional video crafted for A.R. Construction, Jhansi. Precision-cut footage with punchy transitions, bold text callouts, and professional color grading.',
    softwareUsed: ['DaVinci Resolve', 'Color Grading'],
    clientType: 'A.R. Construction, Jhansi',
    colorGraded: true,
  },
  {
    id: 'pe-2',
    title: 'Ramvan Hotel — Promotional Edit',
    category: 'promotional-editing',
    categoryLabel: 'Promotional Editing',
    youtubeId: 'bCNJGZ-pCd4',
    description: 'Commercial promotional edit for Hotel Ramvan, Jhansi. Designed to attract customers with a strong opening hook, elegant visuals, and polished color grade. Video gained 30k+ views.',
    softwareUsed: ['DaVinci Resolve', 'Color Grading'],
    clientType: 'Hotel Ramvan, Jhansi',
    colorGraded: true,
  },
  {
    id: 'pe-3',
    title: 'Dubey Resort — Promotional Edit',
    category: 'promotional-editing',
    categoryLabel: 'Promotional Editing',
    youtubeId: 'iPU1sdazF60',
    description: 'Cinematic promotional edit for Dubey Resort, highlighting the venue and amenities with engaging transitions, dynamic motion graphics, and a professional color grade.',
    softwareUsed: ['DaVinci Resolve', 'Color Grading'],
    clientType: 'Dubey Resort, Jhansi',
    colorGraded: true,
  },

  // ── Travel & Education ──
  {
    id: 'te-1',
    title: 'Bhojpur Temple — Travel & Education',
    category: 'travel-education',
    categoryLabel: 'Travel & Education',
    youtubeId: 'RV1SYNv9Ejw',
    description: 'A cinematic travel and educational piece covering the magnificent Bhojpur Temple. Smooth transitions, warm color grading, and atmospheric sound design bring the ancient architecture to life.',
    softwareUsed: ['DaVinci Resolve', 'Color Grading'],
    clientType: 'Travel & Educational Content',
    colorGraded: true,
  },
  {
    id: 'te-2',
    title: 'Before vs After — Travel & Education Color Grade',
    category: 'travel-education',
    categoryLabel: 'Travel & Education',
    youtubeId: 'Parac8JpypY',
    thumbnailOverride: '/images/before-vs-after-thumb.jpg',
    description: 'Side-by-side color grading breakdown showcasing raw flat log footage transformed into a vivid, cinematic grade with balanced exposure, skin tone refinement, and rich contrast in DaVinci Resolve.',
    softwareUsed: ['DaVinci Resolve', 'Color Grading', 'Node Pipeline'],
    clientType: 'Travel & Education / Colorist Showcase',
    colorGraded: true,
  },

  // ── Vlogs ──
  {
    id: 'vl-1',
    title: 'Halloween Vlog — Cinematic Edit',
    category: 'vlogs',
    categoryLabel: 'Vlogs',
    youtubeId: 'hJy-jSkeEZ8',
    thumbnailOverride: '/images/halloween-vlog-thumb.jpg',
    description: 'A high-energy, cinematic vlog edit capturing spooky Halloween night storytelling with dynamic pacing, punchy jump cuts, immersive sound design, and atmospheric color grading.',
    softwareUsed: ['DaVinci Resolve', 'Color Grading', 'Sound Design'],
    clientType: 'Vlog / YouTube Creator',
    colorGraded: true,
  },
];
