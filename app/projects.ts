import content from '../content/projects.json';

export type Project = {
  id: string;
  title: string;
  format: 'Video';
  tone: string;
  url: string;
  videoUrl?: string;
  referenceUrl?: string;
  referenceLabel?: string;
  thumbnail: string;
  localVideo?: string;
  description: string;
  featured: boolean;
  hero?: boolean;
  textCard?: boolean;
  /** Video offset in seconds, used by embedded previews. */
  startSeconds?: number;
  start?: number;
  end?: number;
};

export type ProjectSection = {
  id: string;
  title: string;
  description: string;
  projectIds: string[];
};

export type HeroContent = {
  featuredLabel: string;
  workLinkLabel: string;
  label: string;
  name: string[];
  statement: string;
  currentProjectLabel: string;
  rotationSeconds?: number;
};

export type MainBarContent = {
  brand: string;
  items: Array<{ label: string; href: string; externalIcon?: boolean }>;
};

export type ExperienceContent = {
  items: Array<{
    divider?: string;
    company?: string;
    logo?: string;
    logoAlt?: string;
    role?: string;
    organization?: string;
    period?: string;
    details?: string[];
  }>;
};

export type PublicationsContent = {
  title: string;
  description: string;
  items: Array<{ type: string; title: string; url: string }>;
};

const projectContent = content as { hero: HeroContent; mainBar: MainBarContent; experience: ExperienceContent; publications: PublicationsContent; projects: Project[]; sections: ProjectSection[] };

export const heroContent = projectContent.hero;
export const mainBarContent = projectContent.mainBar;
export const experienceContent = projectContent.experience;
export const publicationsContent = projectContent.publications;
export const projects = projectContent.projects;
export const projectSections = projectContent.sections;

export function getVideoEmbedUrl(project: Project) {
  const start = project.startSeconds ?? project.start;
  const { end } = project;
  const url = project.videoUrl ?? project.url;
  const videoId = url.match(/vimeo\.com\/(\d+)/)?.[1];

  if (videoId) {
    const offset = start !== undefined ? `#t=${start}s` : '';
    return `https://player.vimeo.com/video/${videoId}?background=1&autoplay=1&muted=1&autopause=0&api=1${offset}`;
  }

  const youtubeId = url.match(/[?&]v=([^&]+)/)?.[1] ?? url.match(/youtu\.be\/([^?&/]+)/)?.[1];
  if (!youtubeId) return null;

  const timing = new URLSearchParams({ autoplay: '1', mute: '1', controls: '0', enablejsapi: '1', playsinline: '1', rel: '0' });
  if (start !== undefined) timing.set('start', String(start));
  if (end !== undefined) timing.set('end', String(end));
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${timing}`;
}
